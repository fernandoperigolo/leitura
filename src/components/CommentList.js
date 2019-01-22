import React, { Component } from 'react'
import { connect } from 'react-redux'
import CommentVoteScore from './CommentVoteScore'
import { handleDeleteComment } from '../actions/comments'

class CommentList extends Component {

  handleDelete = (e, comment) => {
    e.preventDefault()

    console.log('comment:', comment);
    const { dispatch } = this.props

    dispatch(handleDeleteComment(comment))
  }

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

                {this.props.user.userId === this.props.comments[comment].author
                  ? <div className='comment-actions'>
                      <button onClick={(e) => this.handleDelete(e, this.props.comments[comment])} className='button-action'>Delete Comment</button>
                    </div>
                  : null
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