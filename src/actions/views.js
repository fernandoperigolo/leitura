import { getHomeData, getCategoryData, getAllCategories, getPostData } from '../utils/readableApi'
import { setAllCategories } from './categories'
import { setAllPosts, addPost } from './posts'
import { setAllCommentsForPost } from './comments'
import { setAuthedUser } from './authedUser'

const AUTHED_ID = 'thingone'

export function handleHomeData () {
  return (dispatch) => {
    return getHomeData().then(({categories, posts}) => {
      dispatch(setAllCategories(categories))
      dispatch(setAllPosts(posts))
      dispatch(setAuthedUser(AUTHED_ID))
    })
    .catch(error =>  console.warn(error))
  }
}

export function handleCategoryData (categoryPath) {
  return (dispatch) => {
    return getCategoryData(categoryPath).then(({categories, posts}) => {
      dispatch(setAllCategories(categories))
      dispatch(setAllPosts(posts))
      dispatch(setAuthedUser(AUTHED_ID))
    })
    .catch(error =>  console.warn(error))
  }
}

export function handlePostNewData () {
  return (dispatch) => {
    return getAllCategories().then(categories => {
      dispatch(setAllCategories(categories))
      dispatch(setAuthedUser(AUTHED_ID))
    })
    .catch(error =>  console.warn(error))
  }
}

export function handlePostData (id) {
  return (dispatch, getState) => {
    const { posts } = getState()

    return getPostData(id).then(({categories, post, comments}) => {
      dispatch(setAllCategories(categories))
      if(posts && posts[id]){
        // TODO: this post are already in state, update it
        // dispatch(updatePost(post))
      } else {
        dispatch(addPost(post))
      }
      dispatch(setAllCommentsForPost(comments))
      dispatch(setAuthedUser(AUTHED_ID))
    })
    .catch(error =>  console.warn(error))
  }
}