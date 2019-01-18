import { addPost as addPostAPI } from '../utils/readableApi'

export const SET_ALL_POSTS = 'SET_ALL_POSTS'
export const ADD_POST = 'ADD_POST'

export function setAllPosts (posts) {
  return {
    type: SET_ALL_POSTS,
    posts
  }
}

function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

export function handleAddPost (title, category, body) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    const postData = {
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      timestamp: Date.now(),
      title,
      body,
      author: authedUser,
      category,
    }

    return addPostAPI(postData)
      .then((post) => dispatch(addPost(post)))
      .catch(error =>  console.warn(error))
  }
}