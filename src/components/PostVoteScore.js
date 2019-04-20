import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleIncreasePostVotes, handleDecreasePostVotes } from '../actions/posts'

class PostVoteScore extends Component {
  handleIncrease = (e) => {
    e.preventDefault()

    const { handleIncreasePostVotes, postId } = this.props

    handleIncreasePostVotes(postId)
  }

  handleDecrease = (e) => {
    e.preventDefault()

    const { handleDecreasePostVotes, postId } = this.props

    handleDecreasePostVotes(postId)
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

const mapDispatchToProps = {
  handleIncreasePostVotes,
  handleDecreasePostVotes,
}

export default connect(null, mapDispatchToProps)(PostVoteScore)
