import { SET_ALL_COMMENTS_FOR_POST } from '../actions/comments'

export default function comments(state = {}, action) {
  switch(action.type){
    case SET_ALL_COMMENTS_FOR_POST:
      return {
        ...action.comments
      }
    default:
      return state
  }
}