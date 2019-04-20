import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIncreaseCommentVotes, handleDecreaseCommentVotes } from '../actions/comments'

class CommentVoteScore extends Component {
  handleIncrease = (e) => {
    e.preventDefault()

    const { handleIncreaseCommentVotes, commentId, postId } = this.props

    handleIncreaseCommentVotes(commentId, postId)
  }

  handleDecrease = (e) => {
    e.preventDefault()

    const { handleDecreaseCommentVotes, commentId, postId } = this.props

    handleDecreaseCommentVotes(commentId, postId)
  }

  render() {
    return (
      <div className='comment-list-votescore'>
        <button onClick={this.handleIncrease} className='button-action comment-list-vote comment-list-vote-up'>Vote Up</button>
        <span className='comment-list-score'>{this.props.score}</span>
        <button onClick={this.handleDecrease} className='button-action comment-list-vote comment-list-vote-down'>Vote Down</button>
      </div>
    )
  }
}

const mapDispatchToProps = {
  handleIncreaseCommentVotes,
  handleDecreaseCommentVotes,
}

export default connect(null, mapDispatchToProps)(CommentVoteScore)