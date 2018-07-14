import React ,  { Component } from 'react'
import { FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'
import { getCategories } from '../actions/categories'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { capitalize } from '../utils/helpers'
import { addPost, editPost } from '../actions/posts'
import { v4 } from 'uuid'

class PostForm extends Component {
  constructor(props) {
    super(props)
    const { location } = props
    const post = location.state ? location.state.post : null

    this.state = {
      id: post ? post.id : v4(),
      title: post ? post.title : '',
      author: post ? post.author : '',
      category: post ? post.category : 'react',
      body: post ? post.body : '',
      timestamp: Date.now(),
      showEditForm: location.pathname === '/edit',
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
    const  { id, title, author, category, body  }  = this.state

    const post = {
      id: id,
      title: title,
      author: author,
      category: category,
      body: body,

    }
    // update redux: saving specific post into redux store

    if (this.state.showEditForm) {
      return this.props.editPost(post)
    }

    return this.props.addPost(post)

  }

  render() {
    const { categories } = this.props
    const { category, title, author,body, id, showEditForm } = this.state

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
              { categories.length > 0 && categories.map(category => (
                <option
                  key={category.name}
                  value={category.name}>{capitalize(category.name)}</option>
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
        {showEditForm ?
          <Button
            href={`/${category}/${id}`}
            onClick={this.createPost}
            style={{ width: 70 }}
            type="submit">
            Update
          </Button>
        :
        <Button
          href={`/${category}/${id}`}
          onClick={this.createPost}
          style={{ width: 70 }}
          type="submit">
          Submit
        </Button>
        }
        <Button style={styles.cancelBtn} type="reset" href="/">Cancel</Button>
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
