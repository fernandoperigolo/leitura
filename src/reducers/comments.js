import {
  SET_ALL_COMMENTS_FOR_POST,
  INCREASE_COMMENT_VOTES,
  DECREASE_COMMENT_VOTES
} from '../actions/comments'

export default function comments(state = {}, action) {
  switch(action.type){
    case SET_ALL_COMMENTS_FOR_POST:
      return {
        ...action.comments
      }
    case INCREASE_COMMENT_VOTES:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          [action.commentId]: {
            ...state[action.postId][action.commentId],
            voteScore: state[action.postId][action.commentId].voteScore + 1,
          }
        }
      }
    case DECREASE_COMMENT_VOTES:
      return {
        ...state,
        [action.postId]: {
          ...state[action.postId],
          [action.commentId]: {
            ...state[action.postId][action.commentId],
            voteScore: state[action.postId][action.commentId].voteScore - 1,
          }
        }
      }
    default:
      return state
  }
}