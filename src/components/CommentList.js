import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentVoteScore from './CommentVoteScore'
import CommentEditForm from './CommentEditForm'
import { handleDeleteComment } from '../actions/comments'

class CommentList extends Component {
  state = {
    commentEditMode: null,
  }
  handleDelete = (e, comment) => {
    e.preventDefault()
    const { dispatch } = this.props
    dispatch(handleDeleteComment(comment))
  }

  handleToggleEdit = (e, commentId) => {
    e.preventDefault()

    this.setState(() => ({
      commentEditMode: this.state.commentEditMode === commentId ? null : commentId
    }))
  }

  render() {
    const { comments } = this.props
    return (
      <div className='comment-list'>
        <h3>Comments</h3>

        {comments && Object.keys(comments).length > 0
          ? Object.keys(comments).map(comment =>
              <div key={comments[comment].id} className='comment-list-item'>
                <p className='comment-list-body'>{comments[comment].body}</p>

                <p className='comment-list-author'>By: {comments[comment].author}</p>

                <CommentVoteScore commentId={comments[comment].id} score={comments[comment].voteScore} postId={comments[comment].parentId} />

                {this.props.user.userId === comments[comment].author
                  ? <div className='comment-actions'>
                      <button onClick={(e) => this.handleDelete(e, comments[comment])} className='button-action'>Delete Comment</button>
                      <button onClick={(e) => this.handleToggleEdit(e, comments[comment].id)} className={'button-action ' + (this.state.commentEditMode === comments[comment].id ? 'active' : 'not-active')}>Edit Comment</button>
                    </div>
                  : null
                }

                {this.state.commentEditMode === comments[comment].id &&
                  <CommentEditForm comment={comments[comment]} />
                }
              </div>
            )
          : <p>No comments here...</p>
        }
      </div>
    )
  }
}

function mapStateToProps ({comments, user}, {postId}) {
  return {
    comments: comments[postId],
    user,
  }
}

export default connect(mapStateToProps)(CommentList)