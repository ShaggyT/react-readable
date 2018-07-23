import React ,  { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter }from 'react-router-dom'
import { addComment, editComment } from '../actions/comments'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    const { comment } = this.props

    this.state = {
      id: comment ? comment.id : v4(),
      timestamp: Date.now(),
      body: comment ? comment.body : '',
      author: comment ? comment.author : '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:  e.target.value
    })
  }

  createComment = () => {
    const postId = this.props.match.params.id;

    const { id, author, body } = this.state
    const { editComment, addComment, edit } = this.props

    const comment = {
      id: id,
      author: author,
      body: body,
      parentId: postId,
      timestamp: Date.now(),
    }
    // update redux: saving specific post into redux store

    if (edit) {
       return editComment(comment)

    }
    return addComment(comment)
  }

  render() {
    const { author,body } = this.state
    const { closeForm, edit } = this.props
    const { postId, category } = this.props

    return (
      <form style={styles.container}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Author</ControlLabel>
          <FormControl
            type="text"
            name="author"
            value={author}
            placeholder="What is your name?"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Comment</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="body"
            value={body}
            placeholder="write your description"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Button
          onClick={this.createComment}
          type="submit"
          style={{ width: 70 , marginBottom: 20 }}>
          {edit ? 'Update' : 'Submit '}
        </Button>
      
        <Button
          style={styles.cancelBtn}
          type="reset"
          onClick={closeForm}
          >Cancel
        </Button>
      </form>
    );
  }
}

const styles = {
  container: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
  cancelBtn: {
    marginLeft: 10,
    width: 70,
    marginBottom: 20,
  }
}

function mapDispatchToProps (dispatch) {
  return {
    addComment: (comment) => dispatch(addComment(comment)),
    editComment: (comment) => dispatch(editComment(comment)),
  }
}

export default connect(null, mapDispatchToProps)(withRouter(CommentForm))
