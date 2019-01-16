const api = "http://localhost:3001"

let token = localStorage.token
if (!token)
  token = localStorage.token = Math.random().toString(36).substr(-8)

const headers = {
  'Accept': 'application/json',
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

export const getAllCategories = () => fetch(`${api}/categories`, { headers })
  .then(res => res.json())
  .then(data => normalizeObjectBy('path', data.categories))

export const getAllPosts = () => fetch(`${api}/posts`, { headers })
  .then(res => res.json())
  .then(data => normalizeObjectBy('id', data))