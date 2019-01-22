import {
  SET_AUTHED_USER,
  SET_SORTING_CONFIG,
} from '../actions/user'

const defaultState = {
  userId: null,
  config: {
    postsSortingBy: {
      votes: true,
      comments: false,
      time: false,
    },
  },
}

export default function user(state = defaultState, action) {
  switch(action.type) {
    case SET_AUTHED_USER:
      return {
        ...state,
        userId: action.id
      }
    case SET_SORTING_CONFIG:
      return {
        ...state,
        config: {
          ...state['config'],
          postsSortingBy: {
            votes: action.sort === 'votes' ? true : false,
            comments: action.sort === 'comments' ? true : false,
            time: action.sort === 'time' ? true : false,
          },
        }
      }
    default:
      return state
  }
}