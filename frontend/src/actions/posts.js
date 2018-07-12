import * as API from '../utils/api'
import { GET_POSTS } from './types'

//  Posts
export const getPosts = (category) => dispatch => (
  API
    .fetchPosts(category)
    .then(posts => dispatch({
      type: GET_POSTS,
      posts
    }))
)
