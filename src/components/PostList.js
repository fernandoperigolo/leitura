import React, { Component, Fragment } from 'react'
import PostListItem from './PostListItem';

class PostList extends Component {
  render() {
    return (
      <Fragment>
        {this.props.postsIds.length > 0
          ? this.props.postsIds.map((id) => (
            <PostListItem key={id} id={id} />
            ))
          : <p>No posts here</p>
        }
      </Fragment>
    )
  }
}

export default PostList