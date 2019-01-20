import {
  addPost as addPostAPI,
  increasePostVotes as increasePostVotesAPI,
  decreasePostVotes as decreasePostVotesAPI
} from '../utils/readableApi'

export const SET_ALL_POSTS = 'SET_ALL_POSTS'
export const ADD_POST = 'ADD_POST'
export const INCREASE_POST_VOTES = 'INCREASE_POST_VOTES'
export const DECREASE_POST_VOTES = 'DECREASE_POST_VOTES'

export function setAllPosts (posts) {
  return {
    type: SET_ALL_POSTS,
    posts
  }
}

export function addPost (post) {
  return {
    type: ADD_POST,
    post,
  }
}

function increasePostVotes (postId) {
  return {
    type: INCREASE_POST_VOTES,
    postId,
  }
}

function decreasePostVotes (postId) {
  return {
    type: DECREASE_POST_VOTES,
    postId,
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

export function handleIncreasePostVotes (postId) {
  return (dispatch) => {
    dispatch(increasePostVotes(postId))

    return increasePostVotesAPI(postId)
      .catch(error =>  {
        dispatch(decreasePostVotes(postId))
        console.warn(error)
      })
  }
}

export function handleDecreasePostVotes (postId) {
  return (dispatch) => {
    dispatch(decreasePostVotes(postId))

    return decreasePostVotesAPI(postId)
      .catch(error =>  {
        dispatch(increasePostVotes(postId))
        console.warn(error)
      })
  }
}