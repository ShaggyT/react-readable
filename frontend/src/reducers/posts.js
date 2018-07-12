import { GET_POSTS, GET_POST } from '../actions/types'

function posts (state = {}, action) {
  const { posts } = action
  switch (action.type) {
    case GET_POSTS :
      return posts
    default :
      return state
  }
}

function post (state = {}, action) {
  const { post } = action
  switch (action.type) {
    case GET_POST :
      return post
    default :
      return state
  }
}

export {post, posts}
