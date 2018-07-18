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
        <Button style={ styles.editBtn}>
          <Link
            style={{color: "#050505", fontSize: 12, }}
            to="#"
            onClick={(event) => {
            event.preventDefault();
            this.showCommentForm();
            }}
          >
            Edit
          </Link>
        </Button>

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
    marginLeft: 10,
    width: 55,
    marginTop: 10,
    height: 30,
    borderRadius: 3,

  }
}

export default EditCommentButton
