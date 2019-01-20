export const SET_ALL_COMMENTS_FOR_POST = 'SET_ALL_COMMENTS_FOR_POST'

export function setAllCommentsForPost (comments) {
  return {
    type: SET_ALL_COMMENTS_FOR_POST,
    comments,
  }
}
