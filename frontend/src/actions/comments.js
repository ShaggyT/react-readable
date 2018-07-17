import * as API from '../utils/api'
import { GET_COMMENTS, DELETE_COMMENT } from './types'

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
