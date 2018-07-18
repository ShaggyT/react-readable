import {
  GET_POSTS,
  GET_POST,
  ADD_POST,
  DELETE_POST,
  EDIT_POST,
  VOTE_POST
} from '../actions/types'

function posts (state = {}, action) {
  const { posts, post } = action
  switch (action.type) {
    case GET_POSTS :
      return posts
    case ADD_POST :
      return post
    case DELETE_POST :
      return [
        ...state.filter(post => post.id !== action.id)
      ]
    case EDIT_POST:
       return {
           ...state,
           posts: state.posts.filter(post => post.id !== action.post.id).concat(action.post)
       }
   case VOTE_POST:
     return state.map(post => {
       if (post.id === action.id) {
         if (action.option === "upVote") {
           post.voteScore += 1
         }
         if (action.option === "downVote") {
           post.voteScore -= 1
         }
       }
       return post
     })
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
