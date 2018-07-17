import { GET_COMMENTS, DELETE_COMMENT } from '../actions/types'

function comments (state = [], action) {
  const { comments } = action
  switch (action.type) {
    case GET_COMMENTS :
      return comments
    case DELETE_COMMENT :
      return state.filter(comment => comment.id !== action.id)
    default :
      return state
  }
}

export { comments }
