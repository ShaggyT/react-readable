import React ,  { Component } from 'react'
import { deletePost } from '../actions/posts'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

class DeletePostButton extends Component {
  handleDelete = (id) => {
    this.props.deletePost(id)
  }
  render() {
    const { post } = this.props
    return(
      <Button
        href="/"
        onClick={() => this.handleDelete(post.id)}
        bsSize="small"
        style={{marginTop: 10 }}>
        Delete
      </Button>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  }
}

export default connect(null, mapDispatchToProps)(DeletePostButton)
