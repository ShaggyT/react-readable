import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {
  capitalize,
  sortByDateAscending ,
  sortByDateDescending,
  sortByVotesAscending,
  sortByVotesDescending
} from '../utils/helpers'
import { Link } from 'react-router-dom'
import Post from './Post'

class PostList extends Component {

  sortPosts = (posts, sortBy) => {
    if (sortBy === "date-ascending" ) {
      return sortByDateAscending(posts)
    } else if(sortBy === "date-descending"){
      return sortByDateDescending(posts)
    } else if(sortBy === "votes-ascending"){
      return sortByVotesAscending(posts)
    } else{
      return sortByVotesDescending(posts)
    }
  }


  handleDelete = (id) => {
    this.props.deletePost(id)
  }

  render() {
    const { posts, sortBy } = this.props

    return (
      <ListGroup style={styles.container}>
        { this.sortPosts(posts, sortBy).map((post, index) => (
        <span key={index}>
          <Link to={`/posts/${post.category}/${post.id}`}
            style={{textDecoration: 'none', color:'black'}}>
           <ListGroupItem
             key={post.id}
             style={styles.postItem} header={capitalize(post.title)}>
               <Post post={post} />
           </ListGroupItem>
          </Link>
         </span>
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

// export default connect(
//   undefined,
//   { votePost: votePost }
// )(PostList)

export default PostList
