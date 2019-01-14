import React, { Component, Fragment } from 'react'
import PostList from './PostList'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <h2>All Posts</h2>
        <PostList />
      </Fragment>
    )
  }
}

export default Home