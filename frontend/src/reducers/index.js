import { combineReducers } from 'redux'
import categories from './categories'
import { posts, post} from './posts'
import { comments } from './comments'

export default combineReducers({
  categories,
  posts,
  post,
  comments,
})
