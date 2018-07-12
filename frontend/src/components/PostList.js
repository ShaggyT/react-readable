import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { getPosts } from '../actions/posts'
import { connect } from 'react-redux'

class PostList extends Component {
  componentDidMount () {
    this.props.getPosts()
  }

  render() {
    const { posts } = this.props
    console.log("postssss", posts)
    return (
      <ListGroup style={styles.container}>
        {
          posts.length > 0 &&
           posts.map((post, index) => (
             <ListGroupItem
               key={index}
               style={styles.postItem} header={post.title}>{post.body}</ListGroupItem>
          ))
        }

      </ListGroup>
    )
  }
}

const styles = {
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
  postItem: {
    marginBottom: 10,
    borderRadius: 5,
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

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
