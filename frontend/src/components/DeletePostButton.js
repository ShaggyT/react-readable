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
          style={styles.deleteBtn}
          bsSize="small">
          Delete
        </Button>
      </Link>
    )
  }
}


const styles = {
  deleteBtn: {
    marginTop: 10,
    marginLeft: 10,
    width: 58,
    height: 30,
    borderRadius: 3,
    backgroundColor: "#BC8F8F",
    borderColor: "#BC8F8F",
    color: "#fff",

  }
}

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  }
}

export default connect(null, mapDispatchToProps)(DeletePostButton)
