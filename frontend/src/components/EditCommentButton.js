import React , { Component } from 'react'
import { Link } from 'react-router-dom'
import CommentForm from './CommentForm'
import { Button } from 'react-bootstrap'

class EditCommentButton extends Component {
  constructor (props) {
    super(props);
    this.state = {
      editMode: false,
      displayForm: false,
      commentToEdit: {},
    }
    this.showCommentForm = this.showCommentForm.bind(this);
    this.hideCommentForm = this.hideCommentForm.bind(this);
  }
  showCommentForm(comment) {
    this.setState({
      displayForm: true,
      commentToEdit: comment,
      editMode: true
    });
  }

  hideCommentForm() {
    this.setState({ displayForm: false, commentToEdit: {} });
  }

  render() {
    const { comment, id, category } = this.props
    const { displayForm } = this.state;
    return(
      <span>
        <Link
          style={{color: "#050505", fontSize: 10, }}
          to="#"
          onClick={(event) => {
          event.preventDefault();
          this.showCommentForm();
          }}>
          <Button
            bsSize="small"
            style={styles.editBtn}>
          Edit
          </Button>
        </Link>

        {displayForm &&
          <CommentForm
            postId={id}
            category={category}
            editMode={this.state.editMode}
            comment={comment}
            hideForm={this.hideCommentForm}
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
    marginTop: 10,
    height: 30,
    borderRadius: 3,
    marginBottom: 1
  }
}

export default EditCommentButton
