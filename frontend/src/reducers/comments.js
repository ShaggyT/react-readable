import {
  GET_COMMENTS,
  DELETE_COMMENT,
  ADD_COMMENT,
  EDIT_COMMENT,
  VOTE_COMMENT,
} from '../actions/types'

function comments (state = [], action) {
  const { comments, comment } = action
  switch (action.type) {
    case GET_COMMENTS :
      return comments
    case DELETE_COMMENT :
      return state.filter(comment => comment.id !== action.id)
    case ADD_COMMENT :
      return comment
    case EDIT_COMMENT:
     return {
         ...state,
         comments: state.comments.filter(comment => comment.id !== action.comment.id).concat(action.comment)
       }
     case VOTE_COMMENT:
       return state.map(comment => {
         if (comment.id === action.id) {
           if (action.option === "upVote") {
             comment.voteScore += 1
           }
           if (action.option === "downVote") {
             comment.voteScore -= 1
           }
         }
         return comment
       })
    default :
      return state
  }
}

export { comments }
