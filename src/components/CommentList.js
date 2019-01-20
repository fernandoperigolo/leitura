import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentVoteScore from './CommentVoteScore'

class CommentList extends Component {
  render() {
    return (
      <div className='comment-list'>
        <h3>Comments</h3>

        {this.props.comments && Object.keys(this.props.comments).length > 0
          ? Object.keys(this.props.comments).map(comment =>
              <div key={this.props.comments[comment].id} className='comment-list-item'>
                <p className='comment-list-body'>{this.props.comments[comment].body}</p>
                <p className='comment-list-author'>By: {this.props.comments[comment].author}</p>
                <CommentVoteScore commentId={this.props.comments[comment].id} score={this.props.comments[comment].voteScore} postId={this.props.comments[comment].parentId} />
              </div>
            )
          : <p>No comments here...</p>
        }
      </div>
    )
  }
}

function mapStateToProps ({comments}, {postId}) {
  return {
    comments: comments[postId]
  }
}

export default connect(mapStateToProps)(CommentList)