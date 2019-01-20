import {
  increaseCommentVotes as increaseCommentVotesAPI,
  decreaseCommentVotes as decreaseCommentVotesAPI,
} from '../utils/readableApi'

export const SET_ALL_COMMENTS_FOR_POST = 'SET_ALL_COMMENTS_FOR_POST'
export const INCREASE_COMMENT_VOTES = 'INCREASE_COMMENT_VOTES'
export const DECREASE_COMMENT_VOTES = 'DECREASE_COMMENT_VOTES'


export function setAllCommentsForPost (comments) {
  return {
    type: SET_ALL_COMMENTS_FOR_POST,
    comments,
  }
}

function increaseCommentVotes (commentId, postId) {
  return {
    type: INCREASE_COMMENT_VOTES,
    commentId,
    postId,
  }
}

function decreaseCommentVotes (commentId, postId) {
  return {
    type: DECREASE_COMMENT_VOTES,
    commentId,
    postId,
  }
}


export function handleIncreaseCommentVotes (commentId, postId) {
  return (dispatch) => {
    dispatch(increaseCommentVotes(commentId, postId))

    return increaseCommentVotesAPI(commentId, postId)
      .catch(error =>  {
        dispatch(decreaseCommentVotes(commentId, postId))
        console.warn(error)
      })
  }
}

export function handleDecreaseCommentVotes (commentId, postId) {
  return (dispatch) => {
    dispatch(decreaseCommentVotes(commentId, postId))

    return decreaseCommentVotesAPI(commentId, postId)
      .catch(error =>  {
        dispatch(increaseCommentVotes(commentId, postId))
        console.warn(error)
      })
  }
}
