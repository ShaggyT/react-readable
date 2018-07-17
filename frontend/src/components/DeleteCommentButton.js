import React ,  { Component } from 'react'
import { deleteComment } from '../actions/comments'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

class DeleteCommentButton extends Component {
  handleDelete = (id) => {
    this.props.deleteComment(id)
  }
  render() {
    const { comment, id } = this.props
    return(
      <Button
        href={`posts/${id}`}
        onClick={(event) => {
          event.preventDefault()
          this.handleDelete(comment.id)
        }}
        bsSize="small"
        style={{marginTop: 10 }}>
        Delete
      </Button>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deleteComment: (id) => dispatch(deleteComment(id)),
  }
}

export default connect(null, mapDispatchToProps)(DeleteCommentButton)
