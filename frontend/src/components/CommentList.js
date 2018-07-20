import React ,  { Component } from 'react'
import { ListGroup, ListGroupItem } from 'react-bootstrap'
import {
  capitalize,
  sortByDateAscending,
  sortByDateDescending,
  sortByVotesAscending,
  sortByVotesDescending
 } from '../utils/helpers'
import Comment from './Comment'

class CommentList extends Component {

  sortComments = (comments, sortBy) => {
    if (sortBy === "date-ascending" ) {
      return sortByDateAscending(comments)
    } else if(sortBy === "date-descending"){
      return sortByDateDescending(comments)
    } else if(sortBy === "votes-ascending"){
      return sortByVotesAscending(comments)
    } else{
      return sortByVotesDescending(comments)
    }
  }

  render() {
    const { comments, sortBy } = this.props
    return (
      <ListGroup style={styles.container}>
        {comments && comments.length === 0 ?
            <div
              className="container"
              style={{textAlign: 'center'}}>
              <h4>No Comment</h4>
            </div>
            :
            this.sortComments(comments, sortBy).map((comment, index) => (
               <ListGroupItem
                 key={index}
                 style={styles.commentItem}
                 header={capitalize(comment.title)}>
                   <Comment comment={comment} />
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

export default CommentList
