import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { handleAddComment } from '../actions/comments'

class CommentForm extends Component {
  state = {
    body: '',
    submitedFlag: false,
  }

  handleChange = (e) => {
    const stateItem = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [stateItem]: value
    }))

    if(e.target.value) {
      this.setState(() => ({
        submitedFlag: false,
      }))
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddComment(
      this.props.postId,
      this.state.body,
    ))

    this.setState(() => ({
      body: '',
      submitedFlag: true,
    }))
  }

  render() {
    return (
      <Fragment>
        <h3>Send a Comment</h3>

        <form onSubmit={this.handleSubmit} className='comment-form'>
          <p>
            <label htmlFor='body'>Content</label>
            <textarea
              placeholder="Tell me what you think"
              value={this.state.body}
              onChange={this.handleChange}
              className='textarea'
              id='body'
              required
            />
          </p>
          <p><input type="submit" className='button' value='Send Comment' /></p>
        </form>
        {this.state.submitedFlag &&
          <p className='message-ok'>Your new comment was saved.</p>
        }
      </Fragment>
    )
  }
}

export default connect()(CommentForm)