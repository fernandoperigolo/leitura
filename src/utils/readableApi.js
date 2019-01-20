const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Authorization': token
}

function normalizeObjectBy(attr, object){
  return object.reduce((novoObjeto, item) => {
    novoObjeto[item[attr]] = item;
    return novoObjeto;
  }, {})
}

export const getHomeData = () => Promise.all([
  getAllPosts(),
  getAllCategories(),
]).then(([posts, categories]) => ({
  posts,
  categories,
}))

export const getCategoryData = (categoryPath) => Promise.all([
  getAllPostsByCategory(categoryPath),
  getAllCategories(),
]).then(([posts, categories]) => ({
  posts,
  categories,
}))

export const getAllCategories = () => fetch(`${api}/categories`, { headers })
  .then(res => res.json())
  .then(data => normalizeObjectBy('path', data.categories))

export const getAllPosts = () => fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  .then(data => normalizeObjectBy('id', data))

export const getAllPostsByCategory = (categoryPath) => fetch(`${api}/${categoryPath}/posts`, { headers })
  .then(res => res.json())
  .then(data => normalizeObjectBy('id', data))

export const addPost = (postData) => fetch(`${api}/posts`, {
    headers,
    method: 'POST',
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then(data => data)
  .catch(error => console.log(error))

export const getPostById = (id) => fetch(`${api}/posts/${id}`, { headers })
  .then(res => res.json())
  .then(data => data)
  .catch(error => console.log(error))

export const getCommentsByPostId = (id) => fetch(`${api}/posts/${id}/comments`, { headers })
  .then(res => res.json())
  .then(data => ({
    [id]: normalizeObjectBy('id', data)
  }))
  .catch(error => console.log(error))

export const getPostData = (id) => Promise.all([
  getPostById(id),
  getAllCategories(),
  getCommentsByPostId(id),
]).then(([post, categories, comments]) => ({
  post,
  categories,
  comments,
}))
.catch(error =>  console.warn(error))

export const increasePostVotes = (id) =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ option: 'upVote' })
  })
  .then(res => res.json())
  .then(data => data)
  .catch(error =>  console.warn(error))

export const decreasePostVotes = (id) =>
  fetch(`${api}/posts/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ option: 'downVote' })
  })
  .then(res => res.json())
  .then(data => data)
  .catch(error =>  console.warn(error))

  export const increaseCommentVotes = (id) =>
  fetch(`${api}/comments/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ option: 'upVote' })
  })
  .then(res => res.json())
  .then(data => data)
  .catch(error =>  console.warn(error))

export const decreaseCommentVotes = (id) =>
  fetch(`${api}/comments/${id}`, {
    headers,
    method: 'POST',
    body: JSON.stringify({ option: 'downVote' })
  })
  .then(res => res.json())
  .then(data => data)
  .catch(error =>  console.warn(error))