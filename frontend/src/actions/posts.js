import * as API from '../utils/api'
import { GET_POSTS, GET_POST, ADD_POST, DELETE_POST, EDIT_POST } from './types'

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

export const deletePost = (id) => dispatch => (
  API
    .deletePost(id)
    .then( post => dispatch({
      type: DELETE_POST,
      id
    }))
)

export const editPost = (post) => dispatch => (
  API
    .editPost(post)
    .then( post => dispatch({
      type: EDIT_POST,
      post
    }))
)
