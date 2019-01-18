import { SET_ALL_POSTS, ADD_POST } from '../actions/posts'

export default function posts(state = {}, action) {
  switch(action.type){
    case SET_ALL_POSTS:
      return {
        ...action.posts
      }
    case ADD_POST:
      return {
        ...state,
        [action.post.id]: action.post,
      }
    default:
      return state
  }
}