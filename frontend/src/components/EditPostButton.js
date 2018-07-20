import React ,  { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class EditPostButton extends Component {
  render() {

    const { post } = this.props
      return(
        <Link
          to={{ pathname: '/edit', state: { post } }}
          style={{color: "#050505", fontSize: 12 }}>
          <Button
            bsSize="small"
            style={styles.editBtn }>
            Edit
          </Button>
        </Link>
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
    marginBottom: 1
  }
}

export default EditPostButton
