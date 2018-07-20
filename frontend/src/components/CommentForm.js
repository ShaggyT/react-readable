import React ,  { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addComment, editComment } from '../actions/comments'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    const { postId, comment } = this.props

    this.state = {
      id: comment ? comment.id : v4(),
      author: comment ? comment.author : '',
      body: comment ? comment.body : '',
      timestamp: Date.now(),
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

    const comment = {
      id: id,
      author: author,
      body: body,
      parentId: postId,
    }
    // update redux: saving specific post into redux store

    if (this.props.editMode) {
       return this.props.editComment(comment)
    }
    return this.props.addComment(comment)
  }

  render() {
    const { author,body, id } = this.state
    const { postId, category, hideForm, editMode } = this.props


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
          <FormControl.Feedback />
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
          <FormControl.Feedback />
        </FormGroup>

        <Button
          href={`/posts/${category}/${postId}`}
          onClick={this.createComment}
          style={{ width: 70 }}
          type="submit"
          style={{ marginBottom: 20 }}>
          {editMode ? 'Update' : 'Submit '}
        </Button>

        <Button
          style={styles.cancelBtn}
          type="reset"
          onClick={hideForm}
          >Cancel
        </Button>
      </form>
    );
  }
}

const styles = {
  container: {
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
  }
}

export default connect(null, mapDispatchToProps)(withRouter(CommentForm))
