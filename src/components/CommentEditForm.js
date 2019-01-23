import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleEditComment } from '../actions/comments'

class CommentEditForm extends Component {
  state = {
    comment: '',
    submitedFlag: false,
  }

  componentDidMount() {
    this.setState(() => ({
      comment: this.props.comment
    }))
  }

  handleChange = (e) => {
    const stateItem = e.target.id
    const value = e.target.value

    this.setState(() => ({
      comment: {
        ...this.state.comment,
        [stateItem]: value
      }
    }))

    if(e.target.value) {
      this.setState(() => ({
        submitedFlag: false,
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleEditComment(this.state.comment))

    this.setState(() => ({
      body: '',
      submitedFlag: true,
    }))
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit} className='comment-edit-form'>
          <p>
            <label htmlFor='body'>Content</label>
            <textarea
              placeholder="You are editing this comment"
              value={this.state.comment.body}
              onChange={this.handleChange}
              className='textarea'
              id='body'
              required
            />
          </p>
          {this.state.submitedFlag &&
            <p className='message-ok'>Your comment was saved.</p>
          }
          <p><input type="submit" className='button' value='Save Comment' /></p>
        </form>
      </Fragment>
    )
  }
}

export default connect()(CommentEditForm)