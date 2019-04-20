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
import { Redirect } from 'react-router-dom'

class Post extends Component {
  state = {
    deletedFlag: false,
    redirectFlag: false,
  }
  componentDidMount() {
    this.props.handlePostData(this.props.match.params.id)
  }

  handleEdit = (e) => {
    e.preventDefault()
    this.setState(() => ({
      redirectFlag: true,
    }))
  }

  handleDelete = (e) => {
    e.preventDefault()

    const { handleDeletePost, post } = this.props

    handleDeletePost(post.id)

    this.setState(() => ({
      deletedFlag: true,
    }))
  }

  render() {
    const { post } = this.props
    if (!post && this.props.loading === 0) {
      return <Redirect to='/404' />
    }

    if(this.state.redirectFlag === true) {
      return <Redirect to={'/post/edit/' + this.props.post.id} />
    }

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

                {this.props.user.userId === post.author
                  ? <div className='post-actions'>
                      <button onClick={this.handleEdit} className='button-action'>Edit Post</button>
                      <button onClick={this.handleDelete} className='button-action'>Delete Post</button>
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
              <p className='message-ok'>This post was deleted</p>
            }
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  handlePostData,
  handleDeletePost,
}

function mapStateToProps ({posts, comments, loadingBar, user}, props) {
  return {
    post: posts[props.match.params.id],
    comments: comments[props.match.params.id],
    loading: loadingBar.default,
    user,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post)
