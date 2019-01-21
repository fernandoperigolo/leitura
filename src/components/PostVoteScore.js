import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIncreasePostVotes, handleDecreasePostVotes } from '../actions/posts'

class PostVoteScore extends Component {
  handleIncrease = (e) => {
    e.preventDefault()

    const { dispatch, postId } = this.props

    dispatch(handleIncreasePostVotes(postId))
  }

  handleDecrease = (e) => {
    e.preventDefault()

    const { dispatch, postId } = this.props

    dispatch(handleDecreasePostVotes(postId))
  }

  render() {
    return (
      <div className='post-votescore'>
        <button onClick={this.handleIncrease} className='post-vote post-vote-up'>Vote Up</button>
        <span className='post-score'>
          <span className='post-score-inner'>
            {this.props.score}
          </span>
        </span>
        <button onClick={this.handleDecrease} className='post-vote post-vote-down'>Vote Down</button>
      </div>
    )
  }
}

export default connect()(PostVoteScore)