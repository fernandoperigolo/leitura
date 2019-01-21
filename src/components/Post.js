import React, { Component, Fragment } from 'react'
import Header from './Header'
import Footer from './Footer'
import CommentList from './CommentList'
import CommentForm from './CommentForm'
import PostVoteScore from './PostVoteScore'
import { connect } from 'react-redux'
import { handlePostData } from '../actions/views'
import { handleDeletePost } from '../actions/posts'
import { formatDate } from '../utils/helpers'

class Post extends Component {
  state = {
    deletedFlag: false,
  }
  componentDidMount() {
    this.props.dispatch(handlePostData(this.props.match.params.id))
  }

  handleEdit = (e) => {
    e.preventDefault()

    //const { dispatch, post } = this.props

    //dispatch(handleEditPost(post.id))
  }

  handleDelete = (e) => {
    e.preventDefault()

    const { dispatch, post } = this.props

    dispatch(handleDeletePost(post.id))

    this.setState(() => ({
      deletedFlag: true,
    }))
  }

  render() {
    const { post } = this.props
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            {(this.props.loading === 0 && !this.state.deletedFlag) &&
              <div className='post'>
                <h2>{post.title}</h2>
                <p className='post-info'>
                  <span className='post-author'>By: {post.author}</span>
                  <span className='post-datetime'>When: {formatDate(post.timestamp)}</span>
                  <span className='post-comment-count'>Comments: {post.commentCount}</span>
                </p>

                {this.props.authedUser === post.author
                  ? <div className='post-actions'>
                      <button onClick={this.handleEdit}>Edit Post</button>
                      <button onClick={this.handleDelete}>Delete Post</button>
                    </div>
                  : null
                }

                <div className='post-content'>
                  {post.body}
                </div>

                <PostVoteScore postId={this.props.match.params.id} score={post.voteScore} />

                <CommentList postId={this.props.match.params.id} />
                <CommentForm postId={this.props.match.params.id} />
              </div>
            }

            {this.props.loading === 1 &&
              <p>Loading...</p>
            }

            {this.state.deletedFlag &&
              <p>This post was deleted</p>
            }
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({posts, comments, loadingBar, authedUser}, props) {
  return {
    post: posts[props.match.params.id],
    comments: comments[props.match.params.id],
    loading: loadingBar.default,
    authedUser,
  }
}

export default connect(mapStateToProps)(Post)