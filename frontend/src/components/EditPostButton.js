import React ,  { Component } from 'react'
import { editPost } from '../actions/posts'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class EditPostButton extends Component {
  render() {

    const { post } = this.props
      return(
        <Button
          style={ styles.editBtn}>
          <Link style={{color: "#050505", fontSize: 12, }} to={{ pathname: '/edit', state: { post } }}
          >
            Edit
          </Link>
        </Button>
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

export default EditPostButton
