import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { formattedDate, capitalize, commentsCount, sortByDateAscending , sortByDateDescending, sortByVotesAscending, sortByVotesDescending } from '../utils/helpers'
import { Link } from 'react-router-dom'
import DeletePostButton from './DeletePostButton'
import EditPostButton from './EditPostButton'
import Vote from './Vote'
import { votePost } from '../actions/posts'
import { connect } from 'react-redux'

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
    const { posts, votePost, sortBy } = this.props

    return (
      <ListGroup style={styles.container}>
        { this.sortPosts(posts, sortBy).map((post, index) => (
          <span>
          <Link to={`/posts/${post.category}/${post.id}`}
            style={{textDecoration: 'none', color:'black'}}>
           <ListGroupItem
             key={index}
             style={styles.postItem} header={capitalize(post.title)}
             >
             <div style={{marginBottom: 10, marginTop: 10 }}>
               Category: <Link to={`/${post.category}`}
               style={{color: 'blue',}}
               >
                {capitalize(post.category)}
             </Link> | Posted At: {formattedDate(post.timestamp)}</div>
             <div> By: <b>{post.author}</b> | {commentsCount(post.commentCount)} | <Vote
               onUpvote={() => votePost(post.id, "upVote")}
               onDownvote={() => votePost(post.id, "downVote")}
               voteScore={post.voteScore}/>
             </div>
             <DeletePostButton post={post}/>
             <EditPostButton post={post} />
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

export default connect(
  undefined,
  { votePost: votePost }
)(PostList)
