import React, { Component } from 'react'
import { connect } from 'react-redux'

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
                <div className='comment-list-votescore'>
                  <a href='#' className='comment-list-vote comment-list-vote-up'>Vote Up</a>
                  <span className='comment-list-score'>{this.props.comments[comment].voteScore}</span>
                  <a href='#' className='comment-list-vote comment-list-vote-down'>Vote Down</a>
                </div>
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