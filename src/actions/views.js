import { getHomeData } from '../utils/readableApi'
import { setAllCategories } from './categories'
import { setAllPosts } from './posts'
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