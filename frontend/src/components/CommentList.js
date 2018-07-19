import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { formattedDate, capitalize } from '../utils/helpers'
import DeleteCommentButton from './DeleteCommentButton'
import EditCommentButton from './EditCommentButton'
import Vote from './Vote'
import { voteComment } from '../actions/comments'
import { connect } from 'react-redux'

class CommentList extends Component {

  render() {
    const { comments, parentId, category,showEditCommentForm,hideEditCommentForm, voteComment } = this.props
    return (
      <ListGroup style={styles.container}>
        {comments.length === 0 ?
            <div
              className="container"
              style={{textAlign: 'center',
                color: 'blue'}}>
              <h4>No Comment</h4>
            </div>
            :
            comments.map((comment, index) => (
               <ListGroupItem
                 key={index}
                 style={styles.commentItem}
                 header={capitalize(comment.title)}
                 >
                 <div style={{marginBottom: 10, marginTop: 10 }}> {capitalize(comment.body)}</div>
                 <div> Posted At: {formattedDate(comment.timestamp)}</div>
                 <div> By: <b>{comment.author}</b> | <Vote
                   onUpvote={() => voteComment(comment.id, "upVote")}
                   onDownvote={() => voteComment(comment.id, "downVote")}
                   voteScore={comment.voteScore}/>
               </div>

                 <DeleteCommentButton id={parentId} comment={comment} />
                 {/* <EditCommentButton
                    category={category}
                    id={parentId}
                    comment={comment}
                    showForm={showEditCommentForm}
                    /> */}
                <EditCommentButton showForm={showEditCommentForm}
                comment={comment}
                category={category}
                id={parentId}/>
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
  commentItem: {
    marginBottom: 10,
    borderRadius: 5,
  },
  noComment: {
    textAlign: 'center',
    padding: 20,

  }
}

export default connect(
  undefined,
  { voteComment: voteComment }
)(CommentList)
