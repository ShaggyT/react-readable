import { GET_COMMENTS, DELETE_COMMENT, ADD_COMMENT, EDIT_COMMENT } from '../actions/types'

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
    default :
      return state
  }
}

export { comments }
