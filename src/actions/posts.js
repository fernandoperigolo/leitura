export const SET_ALL_POSTS = 'SET_ALL_POSTS'

export function setAllPosts (posts) {
  return {
    type: SET_ALL_POSTS,
    posts
  }
}