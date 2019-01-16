import React, { Component, Fragment } from 'react'
import PostListItem from './PostListItem';

class PostList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.postsIds.map((id) => (
          <PostListItem key={id} id={id} />
        ))}
      </Fragment>
    )
  }
}

export default PostList