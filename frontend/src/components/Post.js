import React ,  { Component } from 'react'
import { formattedDate, capitalize, commentsCount,  } from '../utils/helpers'
import DeletePostButton from './DeletePostButton'
import EditPostButton from './EditPostButton'
import Vote from './Vote'
import { votePost } from '../actions/posts'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Post extends Component {
  render() {
    const { post } = this.props
    return(
    <div style= {styles.container}>
      <div style={{marginBottom: 10, marginTop: 10 }}>
        Category: <Link to={`/${post.category}`}
        style={{color: 'blue',}}
        >{capitalize(post.category)}</Link> | Posted At: {formattedDate(post.timestamp)}</div>
        <div> By: <b>{post.author}</b> | {commentsCount(post.commentCount)} |
          <Vote
          onUpvote={() => votePost(post.id, "upVote")}
          onDownvote={() => votePost(post.id, "downVote")}
          voteScore={post.voteScore}/>
          </div>
          <DeletePostButton post={post}/>
          <EditPostButton post={post} />
        </div>
      )
    }
  }


const styles = {
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
}

export default connect(
  undefined,
  { votePost: votePost }
)(Post)
