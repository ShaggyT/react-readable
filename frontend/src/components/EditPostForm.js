import React ,  { Component } from 'react'
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Button
} from 'react-bootstrap'
import { getCategories } from '../actions/categories'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { capitalize } from '../utils/helpers'
import { editPost } from '../actions/posts'
import { Link } from 'react-router-dom'

class EditPostForm extends Component {
  constructor(props) {
    super(props)
    const { location } = props
    const post = location.state.post

    this.state = {
      id: post.id,
      timestamp: Date.now(),
      title: post.title,
      body: post.body,
      author: post.author,
      category: post.category,
    }
  }

  componentDidMount () {
    this.props.getCategories()
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]:  e.target.value
    })
  }

  createPost = () => {
    const { id, title, author, category, body }  = this.state
    const { editPost } = this.props

    const post = {
      id: id,
      timestamp: Date.now(),
      title: title,
      body: body,
      author: author,
      category: category,
    }
    // update redux: saving specific post into redux store
    return editPost(post)

  }

  render() {
    const { categories } = this.props
    const { category, title, author,body, id } = this.state

    return (
      <form style={styles.container}>
        <FormGroup
          controlId="formBasicText"
        >
          <ControlLabel>Title</ControlLabel>
          <FormControl
            type="text"
            name="title"
            value={title}
            placeholder="Post title"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>
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

        <FormGroup
          controlId="formControlsSelect">
          <ControlLabel>Category</ControlLabel>
          <FormControl
            componentClass="select" placeholder="category"
            name="category"
            value={category}
            onChange={this.handleChange}
            >
              { categories.length > 0 && categories.map((category,index) => (
                <option
                  key={index}
                  value={category.name}>
                  {capitalize(category.name)}
                </option>
                ))
              }
          </FormControl>
        </FormGroup>
        <FormGroup controlId="formBasicText">
          <ControlLabel>Description</ControlLabel>
          <FormControl
            componentClass="textarea"
            name="body"
            value={body}
            placeholder="write your description"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <Link to={`/posts/${category}/${id}`}>
          <Button
            onClick={this.createPost}
            style={{ width: 70 }}
            type="submit">
            Update
          </Button>
        </Link>
        <Link to="/">
          <Button style={styles.cancelBtn} type="reset">Cancel</Button>
        </Link>
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
    width: 70
  }
}

function mapStateToProps ( categories ) {
    return categories
}


function mapDispatchToProps (dispatch) {
  return {
    getCategories: () => dispatch(getCategories()),
    editPost: (post) => dispatch(editPost(post)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditPostForm))
