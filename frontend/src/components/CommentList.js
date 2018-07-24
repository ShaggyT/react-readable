import React ,  { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import {
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
    const { comments, sortBy, category } = this.props
    return (
      <ListGroup style={styles.container}>
        {comments && comments.length === 0 ?
            <div
              className="container"
              style={{textAlign: 'center'}}>
              <h4>No Comment</h4>
            </div>
            :
            this.sortComments(comments, sortBy).map((comment) => (
               <Comment
                category={category}
                key={comment.id}
                comment={comment}
                {...comment}
              />
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
  noComment: {
    textAlign: 'center',
    padding: 20,
  }
}


export default CommentList
