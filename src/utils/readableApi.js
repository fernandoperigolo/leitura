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

export const getPostData = (id) => Promise.all([
  getPostById(id),
  getAllCategories(),
]).then(([post, categories]) => ({
  post,
  categories,
}))