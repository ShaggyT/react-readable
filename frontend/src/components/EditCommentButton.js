import React , { Component } from 'react'
import CommentForm from './CommentForm'
import { Button } from 'react-bootstrap'

class EditCommentButton extends Component {
  constructor (props) {
    super(props)
    this.state = {
      edit: false,
      showForm: false,
      comment: {},
    }
    this.openCommentForm = this.openCommentForm.bind(this)
    this.closeCommentForm = this.closeCommentForm.bind(this)
  }


  openCommentForm(comment) {
    this.setState({
      edit: true,
      showForm: true,
      comment: comment,
    })
  }

  closeCommentForm() {
    this.setState({
      edit: false,
      showForm: false,
      comment: {},
    })
  }

  render() {
    const { comment, id, category } = this.props
    const { showForm, edit } = this.state;
    return(
      <span>
        <Button
          onClick={(event) => {
          event.preventDefault()
          this.openCommentForm()
          }}
          bsSize="small"
          style={styles.editBtn}>
        Edit
        </Button>
        {showForm &&
          <CommentForm
            postId={id}
            category={category}
            edit={edit}
            comment={comment}
            closeForm={this.closeCommentForm}
          />
        }
      </span>
    )
  }
}

const styles = {
  editBtn: {
    marginTop: 10,
    marginLeft: 10,
    width: 58,
    height: 30,
    borderRadius: 3,
    marginBottom: 1,
  }
}

export default EditCommentButton
