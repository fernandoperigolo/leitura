import { combineReducers } from 'redux'
import user from './user'
import categories from './categories'
import posts from './posts'
import comments from './comments'
import { loadingBarReducer } from 'react-redux-loading'

export default combineReducers({
  user,
  categories,
  posts,
  comments,
  loadingBar: loadingBarReducer,
})