import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from 'react-bootstrap'
import { formattedDate, capitalize, commentsCount } from '../utils/helpers'
import { Link } from 'react-router-dom'
import { deletePost } from '../actions/posts'
import { connect } from 'react-redux'
import TrashIcon from 'react-icons/lib/fa/trash'

class PostList extends Component {

  handleDelete = (id) => {
    this.props.deletePost(id)
  }

  render() {
    const { posts } = this.props
    console.log("postssss", posts)
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
             <Button
               href="/"
               onClick={() => this.handleDelete(post.id)}
               bsSize="small"
               style={{marginTop: 10 }}>
               Delete
             </Button>
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

function mapDispatchToProps (dispatch) {
  return {
    deletePost: (id) => dispatch(deletePost(id)),
  }
}

export default connect(null, mapDispatchToProps)(PostList)
