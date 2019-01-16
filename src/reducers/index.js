import { combineReducers } from 'redux'
import authedUser from './authedUser'
import categories from './categories'
import posts from './posts'

export default combineReducers({
  authedUser,
  categories,
  posts,
})