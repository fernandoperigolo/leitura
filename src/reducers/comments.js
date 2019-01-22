import {
  SET_ALL_COMMENTS_FOR_POST,
  INCREASE_COMMENT_VOTES,
  DECREASE_COMMENT_VOTES,
  ADD_COMMENT,
  DELETE_COMMENT,
} from '../actions/comments'

export default function comments(state = {}, action) {
  switch(action.type){
    case SET_ALL_COMMENTS_FOR_POST:
      return {
        ...action.comments
      }
    case ADD_COMMENT :
      return {
        ...state,
        [action.comment.parentId]: {
          ...state[action.comment.parentId],
          [action.comment.id]: {
            ...action.comment
          }
        }
      }
    case DELETE_COMMENT :
      return {
        ...state,
        [action.comment.parentId]: Object.keys(state[action.comment.parentId]).reduce(
          (newCommentsObj, currentCommentKey) =>
            action.comment.id === currentCommentKey
              ? newCommentsObj
              : {
                  ...newCommentsObj,
                  [currentCommentKey]: state[action.comment.parentId][currentCommentKey],
                }
        ,{})
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