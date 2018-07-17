import * as API from '../utils/api'
import { GET_COMMENTS, DELETE_COMMENT, ADD_COMMENT } from './types'

export const getComments = (id) => dispatch => (
  API
    .fetchComments(id)
    .then(comments => dispatch({
      type: GET_COMMENTS,
      comments
    }))
)


export const deleteComment = (id) => dispatch => (
  API
    .deleteComment(id)
    .then(comment => dispatch({
      type: DELETE_COMMENT,
      id
    }))
)


export const addComment = (comment) => dispatch => (
  API
    .addComment(comment)
    .then(comment => dispatch({
      type: ADD_COMMENT,
      comment
    }))
)
