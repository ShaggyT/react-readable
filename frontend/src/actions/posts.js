import * as API from '../utils/api'
import { GET_POSTS, GET_POST, ADD_POST } from './types'

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

export const addPost = (post) => dispatch => (
  API
    .addPost(post)
    .then( post => dispatch({
      type: ADD_POST,
      post
    }))
)
