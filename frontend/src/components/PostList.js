import React ,  { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import {
  sortByDateAscending ,
  sortByDateDescending,
  sortByVotesAscending,
  sortByVotesDescending
} from '../utils/helpers'
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
        {posts && this.sortPosts(posts, sortBy).map((post,index) => (
          <span key={index}>
            <Post
              key={post.id}
              post={post}
              {...post}
            />
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
  noPost: {
    textAlign: 'center',
    padding: 20,

  }
}

export default PostList
