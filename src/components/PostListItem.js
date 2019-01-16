import React, { Component } from 'react'
import { connect } from 'react-redux'

class PostListItem extends Component {
  render() {
    const { post } = this.props
    return (
      <div>
        Title: {post.title}
      </div>
    )
  }
}

function mapStateToProps ({posts}, {id}) {
  return {
    post: posts[id]
  }
}

export default connect(mapStateToProps)(PostListItem)