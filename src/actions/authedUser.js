export const SET_AUTHED_USER = 'SET_AUTHED_USER'

// This action creator is passed to reducer with the ID of atuhed user
export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id
  }
}