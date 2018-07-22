import * as API from '../utils/api'
import { GET_CATEGORIES } from './types'

export const getCategories = () => dispatch => (
  API
    .fetchCategories()
    .then(categories => dispatch({
      type: GET_CATEGORIES,
      categories
    }))
)
