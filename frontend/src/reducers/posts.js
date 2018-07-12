import { GET_POSTS } from '../actions/types'

function posts (state = {}, action) {
  const { posts } = action
  switch (action.type) {
    case GET_POSTS :
      return posts
    default :
      return state
  }
}

export default posts
