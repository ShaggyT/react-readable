import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { formattedDate, capitalize, commentsCount } from '../utils/helpers'
import { Link } from 'react-router-dom'
import DeletePostButton from './DeletePostButton'
import EditPostButton from './EditPostButton'

class PostList extends Component {

  handleDelete = (id) => {
    this.props.deletePost(id)
  }

  render() {
    const { posts } = this.props
    return (
      <ListGroup style={styles.container}>
        { posts.map((post, index) => (
           <ListGroupItem
             key={index}
             style={styles.postItem} header={capitalize(post.title)}
             href={`/posts/${post.id}`}
             >
             <div style={{marginBottom: 10, marginTop: 10 }}>
               Category: <Link to={`/:${post.category}`}
               style={{color: 'blue',}}
               >
                {capitalize(post.category)}
             </Link> | Posted At: {formattedDate(post.timestamp)}</div>
             <div> By: <b>{post.author}</b> | {commentsCount(post.commentCount)} | </div>
             <DeletePostButton post={post}/>
             <EditPostButton post={post} />
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
