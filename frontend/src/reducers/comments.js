import { GET_COMMENTS } from '../actions/types'

function comments (state = [], action) {
  const { comments } = action
  switch (action.type) {
    case GET_COMMENTS :
      return comments
    default :
      return state
  }
}

export { comments }
