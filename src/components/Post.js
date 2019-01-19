import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handlePostData } from '../actions/views'

class Post extends Component {
  componentDidMount() {
    this.props.dispatch(handlePostData(this.props.match.params.id))
  }
  render() {
    const { post } = this.props
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            {this.props.post
            ? <div className='post'>
                <h2>{post.title}</h2>
                <p className='post-info'>
                  <span className='post-author'>By: {post.author}</span>
                  <span className='post-datetime'>Date and Time: {post.timestamp}</span>
                  <span className='post-comment-count'>Comments: {post.commentCount}</span>
                </p>

                <div className='post-content'>
                  {post.body}
                </div>

                <div className='post-votescore'>
                  <a href='#' className='post-vote post-vote-up'>Vote Up</a>
                  <span className='post-score'>{post.voteScore}</span>
                  <a href='#' className='post-vote post-vote-down'>Vote Down</a>
                </div>
              </div>
            : <p>Loading</p>}

          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({posts}, props) {
  return {
    post: posts[props.match.params.id]
  }
}

export default connect(mapStateToProps)(Post)