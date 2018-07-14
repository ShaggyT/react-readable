import { GET_POSTS, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } from '../actions/types'

function posts (state = {}, action) {
  const { posts, post } = action
  switch (action.type) {
    case GET_POSTS :
      return posts
    case ADD_POST :
      return post
    case DELETE_POST :
      return state.filter(post => post.id !== action.id)
    case EDIT_POST:
       return {
           ...state,
           posts: state.posts.filter(post => post.id !== action.post.id).concat(action.post)
       }
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
