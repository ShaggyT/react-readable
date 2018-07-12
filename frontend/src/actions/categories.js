import * as API from '../utils/api'
import { GET_CATEGORIES } from './types'

//  Categories
export const getCategories = (categories) => {
  return {
    type: GET_CATEGORIES,
    categories
  }
}

export const fetchCategories = () => dispatch => (
  API
    .fetchCategories()
    .then(categories => dispatch(getCategories(categories)))
)
