import React ,  { Component } from 'react'
import {
  formattedDate,
  capitalize,
 } from '../utils/helpers'
import DeleteCommentButton from './DeleteCommentButton'
import EditCommentButton from './EditCommentButton'
import Vote from './Vote'
import { voteComment } from '../actions/comments'
import { connect } from 'react-redux'

class Comment extends Component {

  render() {
    const { parentId, category, showEditCommentForm, comment } = this.props
    return (
      <div style={styles.container}>
        <div style={{marginBottom: 10, marginTop: 10 }}> {capitalize(comment.body)}</div>
        <div> Posted At: {formattedDate(comment.timestamp)}</div>
        <div> By: <b>{comment.author}</b> | <Vote
          onUpvote={() => voteComment(comment.id, "upVote")}
          onDownvote={() => voteComment(comment.id, "downVote")}
          voteScore={comment.voteScore}/>
        </div>
         <DeleteCommentButton id={parentId} comment={comment} />

         <EditCommentButton showForm={showEditCommentForm}
         comment={comment}
         category={category}
         id={parentId}/>
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
  { voteComment: voteComment }
)(Comment)
