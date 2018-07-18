import React ,  { Component } from 'react'
import { deletePost } from '../actions/posts'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class DeletePostButton extends Component {
  handleDelete = (id) => {
    this.props.deletePost(id)
  }
  render() {
    const { post } = this.props
    return(
      <Link
        to='/'
        onClick={() => this.handleDelete(post.id)}
      >
        <Button
          bsSize="small"
          style={{marginTop: 10 }}>
          Delete
        </Button>
      </Link>
    )
  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  }
}

export default connect(null, mapDispatchToProps)(DeletePostButton)
