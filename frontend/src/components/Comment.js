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
import { ListGroupItem } from 'react-bootstrap'

class Comment extends Component {

  render() {
    const { parentId, category, showEditCommentForm, comment, body, timestamp, author, id, voteScore, voteComment } = this.props
    return (
      <div style={styles.container}>
        <ListGroupItem
          key={id}
          style={styles.commentItem}
          >
          <span
            style={styles.commentText}>
            {capitalize(body)}
          </span>
          <span style={{display : 'block'}}> Posted At: {formattedDate(timestamp)}
          </span>
          <span style={{display : 'block'}}> By: <b>{author}</b> | &nbsp;
            <Vote
              onVoteUp={() => voteComment(id, "upVote")}
              onVoteDown={() => voteComment(id, "downVote")}
              voteResult={voteScore}
            />
          </span>
           <DeleteCommentButton id={parentId} comment={comment} />
           <EditCommentButton showForm={showEditCommentForm}
           comment={comment}
           category={category}
           id={parentId}/>
        </ListGroupItem>
      </div>
    )
  }
}

const styles = {
  container: {
    marginRight: 10,
    marginLeft: 10,
  },
  commentItem: {
    marginBottom: 10,
    borderRadius: 5,
  },
  commentText: {
    marginBottom: 10,
    marginTop: 10,
    display: 'block',
    fontSize: 18,
    color: 'gray'
  }
}

export default connect(
  undefined,
  { voteComment: voteComment }
)(Comment)
