import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { getPosts } from '../actions/posts'
import { connect } from 'react-redux'
import { formattedDate, capitalize } from '../utils/helpers'
import { Link } from 'react-router-dom'

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
               style={styles.postItem} header={post.title}
               href={`/posts/${post.id}`}
               >
               <div style={{marginBottom: 10, marginTop: 10 }}>
                 Category: <Link to={`/:${post.category}`}>
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
