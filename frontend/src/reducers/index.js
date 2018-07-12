import { combineReducers } from 'redux'
import categories from './categories'
import { posts, post} from './posts'

export default combineReducers({
  categories,
  posts,
  post,
})
