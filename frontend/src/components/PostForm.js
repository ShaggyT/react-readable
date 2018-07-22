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
import {
  addPost,
  editPost
 } from '../actions/posts'
import { v4 } from 'uuid'
import { Link } from 'react-router-dom'

class PostForm extends Component {
  constructor(props) {
    super(props)
    const { location } = props
    const post = location.state ? location.state.post : null

    this.state = {
      id: post ? post.id : v4(),
      timestamp: Date.now(),
      title: post ? post.title : '',
      body: post ? post.body : '',
      author: post ? post.author : '',
      category: post ? post.category : 'react',
      edit: location.pathname === '/edit',
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
    const { id, title, author, category, body, edit }  = this.state
    const { editPost, addPost } = this.props

    const post = {
      id: id,
      timestamp: Date.now(),
      title: title,
      body: body,
      author: author,
      category: category,
    }
    // update redux: saving specific post into redux store

    if (edit) {
      return editPost(post)
    }
    return addPost(post)
  }





  render() {
    const { categories } = this.props
    const { category, title, author,body, id, edit } = this.state

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
        {edit ?
          <Link to={`/posts/${category}/${id}`}>
            <Button
              onClick={this.createPost}
              style={{ width: 70 }}
              type="submit">
              Update
            </Button>
          </Link>
        :
        <Link to={`/posts/${category}/${id}`}>
          <Button
            onClick={this.createPost}
            style={{ width: 70 }}
            type="submit">
            Submit
          </Button>
        </Link>
        }
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
    addPost: (post) => dispatch(addPost(post)),
    editPost: (post) => dispatch(editPost(post)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PostForm))
