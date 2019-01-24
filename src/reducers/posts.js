import {
  SET_ALL_POSTS,
  ADD_POST,
  INCREASE_POST_VOTES,
  DECREASE_POST_VOTES,
  INCREASE_POST_COMMENT_COUNT,
  DECREASE_POST_COMMENT_COUNT,
} from '../actions/posts'

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
    case INCREASE_POST_VOTES:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          voteScore: state[action.postId].voteScore + 1,
        }
      }
    case DECREASE_POST_VOTES:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          voteScore: state[action.postId].voteScore - 1,
        }
      }
      case INCREASE_POST_COMMENT_COUNT:
        return {
          ...state,
          [action.postId]: {
            ...state[action.postId],
            commentCount: state[action.postId].commentCount + 1,
          }
        }
      case DECREASE_POST_COMMENT_COUNT:
        return {
          ...state,
          [action.postId]: {
            ...state[action.postId],
            commentCount: state[action.postId].commentCount - 1,
          }
        }
    default:
      return state
  }
}