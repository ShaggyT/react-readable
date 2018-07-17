import * as API from '../utils/api'
import { GET_COMMENTS } from './types'

export const getComments = (id) => dispatch => (
  API
    .fetchComments(id)
    .then(comments => dispatch({
      type: GET_COMMENTS,
      comments
    }))
)
