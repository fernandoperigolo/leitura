export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}

export function sortPosts (postsSortingBy, posts) {
  let postsIds = []
  if(postsSortingBy.votes === true){
    postsIds = Object.keys(posts).sort(function(a,b){return posts[b].voteScore - posts[a].voteScore})
  }
  if(postsSortingBy.comments === true){
    postsIds = Object.keys(posts).sort(function(a,b){return posts[b].commentCount - posts[a].commentCount})
  }
  if(postsSortingBy.time === true){
    postsIds = Object.keys(posts).sort(function(a,b){return posts[b].timestamp - posts[a].timestamp})
  }
  return postsIds
}

