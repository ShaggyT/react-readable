import React ,  { Component } from 'react'
import PostList from './PostList'
import { getPosts } from '../actions/posts'
import { connect } from 'react-redux'
import { capitalize } from '../utils/helpers'
import { PageHeader, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Sort from './Sort'

class PostIndexPage extends Component {
  state = {
    sortBy: 'date'
  }

  componentDidMount () {
    const { category } = this.props.match.params
    this.props.getPosts(category)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.category !== this.props.match.params.category) {
      this.props.getPosts(nextProps.match.params.category)
    }
  }

  changeSort = (sortBy) => {
    this.setState({ sortBy })
  }

  showPosts = (posts,category) =>{
    if(posts.length > 0) {
      return(
        <div style={styles.container}>
          <PageHeader style={styles.header}>
          <small>Posts</small>

          <Link to="/posts/new">
            <Button
              style={styles.button}
              className="pull-right"
              bsSize="small"
              >Add Post
            </Button>
          </Link>
          <Sort
            isPost="true"
            onChange={this.changeSort}/>
          </PageHeader>
          <PostList
            sortBy={this.state.sortBy}
            posts={posts}
            category={category}
          />
        </div>
      )
    }
    return (
      <div style={styles.noPost}>
        <h3>
          No post in {category && capitalize(category)}
        </h3>
      </div>
    )
  }

  render() {
    const { posts } = this.props
    const { category } = this.props.match.params

    return (
      <div>
        {this.showPosts(posts, category)}
      </div>
    )
  }
}


const styles = {
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
  noPost: {
    textAlign: 'center',
    padding: 20,
  },
  header: {
    marginLeft: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#BC8F8F",
    borderColor: "#BC8F8F",
    color: "#fff"
  }
}

function mapStateToProps ( posts ) {
    return posts
}

function mapDispatchToProps (dispatch) {
  return {
    getPosts: (data) => dispatch(getPosts(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostIndexPage)
