import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { getPosts } from '../actions/posts'
import { connect } from 'react-redux'
import { formattedDate, capitalize } from '../utils/helpers'
import { Link } from 'react-router-dom'

class PostList extends Component {

  render() {
    const { category } = this.props
    const { posts } = this.props
    console.log("postssss", posts)
    return (
      <ListGroup style={styles.container}>
        { posts.map((post, index) => (
           <ListGroupItem
             key={index}
             style={styles.postItem} header={post.title}
             href={`/posts/${post.id}`}
             >
             <div style={{marginBottom: 10, marginTop: 10 }}>
               Category: <Link to={`/:${post.category}`}
               style={{color: 'blue',}}
               >
                {capitalize(post.category)}
             </Link> | Posted At: {formattedDate(post.timestamp)}</div>
             <div> By: <b>{post.author}</b> | {post.commentCount} comments</div>
           </ListGroupItem>
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
  },
  noPost: {
    textAlign: 'center',
    padding: 20,

  }
}

export default PostList
