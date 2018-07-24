import React ,  { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter }from 'react-router-dom'
import { addComment } from '../actions/comments'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'

class NewCommentForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      id: v4(),
      timestamp: Date.now(),
      body: '',
      author: '',
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:  e.target.value
    })
  }

  createComment = () => {
    const postId = this.props.match.params.id;
    const { category } = this.props.match.params;

    const { id, author, body } = this.state
    const { addComment } = this.props

    const comment = {
      id: id,
      author: author,
      body: body,
      parentId: postId,
      timestamp: Date.now(),
    }
    // update redux: saving specific post into redux store

    return addComment(comment)
  }

  render() {
    const { author,body } = this.state
    const { closeForm } = this.props

    const postId = this.props.match.params.id;
    const { category } = this.props.match.params;

    return (
      <form style={styles.container}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel style={styles.inputLabel}>Author</ControlLabel>
          <FormControl
            type="text"
            name="author"
            value={author}
            placeholder="What is your name?"
            onChange={this.handleChange}
          />
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel style={styles.inputLabel}>Comment</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="body"
            value={body}
            placeholder="write your description"
            onChange={this.handleChange}
          />
        </FormGroup>
        <Link to={`/posts/${category}/${postId}`}>
          <Button
            onClick={this.createComment}
            type="submit"
            style={{ width: 70 , marginBottom: 20 }}>
            Submit
          </Button>
        </Link>
        <Link to={`/posts/${category}/${postId}`}>
          <Button style={styles.cancelBtn} type="reset">Cancel</Button>
        </Link>
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
  inputLabel: {
    fontSize: 15,
    marginBottom: 10,
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

export default connect(null, mapDispatchToProps)(withRouter(NewCommentForm))
