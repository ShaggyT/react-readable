import React ,  { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { addComment } from '../actions/comments'
import { v4 } from 'uuid'

class CommentForm extends Component {
  constructor(props) {
    super(props)
    // const { location } = props
    // const comment = location.state ? location.state.comment : null

    this.state = {
      id: v4(),
      author: '',
      body: '',
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

    const  { id,  author,  body  }  = this.state

    const comment = {
      id: id,
      author: author,
      body: body,
      parentId: postId,
    }
    // update redux: saving specific post into redux store
    return this.props.addComment(comment)

  }

  render() {
    const { showForm } = this.state
    const { author,body, id } = this.state
    const { postId } = this.props


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
          href={`/posts/${postId}`}
          onClick={this.createComment}
          style={{ width: 70 }}
          type="submit"
          style={{ marginBottom: 20 }}>
          Submit
        </Button>
        <Button
          style={styles.cancelBtn}
          type="reset"
          href={`/posts/${postId}`}
          >Cancel</Button>
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
