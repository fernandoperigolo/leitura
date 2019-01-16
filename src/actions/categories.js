export const SET_ALL_CATEGORIES = 'SET_ALL_CATEGORIES'

export function setAllCategories (categories) {
  return {
    type: SET_ALL_CATEGORIES,
    categories
  }
}