import { GET_POSTS, GET_POST, ADD_POST } from '../actions/types'

function posts (state = {}, action) {
  const { posts, post } = action
  switch (action.type) {
    case GET_POSTS :
      return posts
    case ADD_POST :
      return post
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
