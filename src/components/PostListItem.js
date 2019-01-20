import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import VoteScore from './VoteScore'

class PostListItem extends Component {
  render() {
    const { post } = this.props
    return (
      <div className='post-list-item'>
        <h2><Link to={`/post/${post.id}`} className='tweet'>{post.title}</Link></h2>
        <p className='post-info'>
          <span className='post-author'>By: {post.author}</span>
          <span className='post-datetime'>Date and Time: {post.timestamp}</span>
          <span className='post-comment-count'>Comments: {post.commentCount}</span>
        </p>
        <VoteScore postId={post.id} score={post.voteScore} />
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