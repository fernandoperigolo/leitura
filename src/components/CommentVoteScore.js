import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIncreaseCommentVotes, handleDecreaseCommentVotes } from '../actions/comments'

class CommentVoteScore extends Component {
  handleIncrease = (e) => {
    e.preventDefault()

    const { dispatch, commentId, postId } = this.props

    dispatch(handleIncreaseCommentVotes(commentId, postId))
  }

  handleDecrease = (e) => {
    e.preventDefault()

    const { dispatch, commentId, postId } = this.props

    dispatch(handleDecreaseCommentVotes(commentId, postId))
  }

  render() {
    return (
      <div className='comment-list-votescore'>
        <button onClick={this.handleIncrease} className='comment-list-vote comment-list-vote-up'>Vote Up</button>
        <span className='comment-list-score'>{this.props.score}</span>
        <button onClick={this.handleDecrease} className='comment-list-vote comment-list-vote-down'>Vote Down</button>
      </div>
    )
  }
}

export default connect()(CommentVoteScore)