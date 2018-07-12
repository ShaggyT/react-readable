import * as API from '../utils/api'
import { GET_POSTS, GET_POST } from './types'

export const getPosts = (category) => dispatch => (
  API
    .fetchPosts(category)
    .then(posts => dispatch({
      type: GET_POSTS,
      posts
    }))
)

export const getPost = (id) => dispatch => (
  API
    .fetchPost(id)
    .then( post => dispatch({
      type: GET_POST,
      post
    }))
)
