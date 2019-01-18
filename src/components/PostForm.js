import React, { Component, Fragment } from 'react'
import { handleAddPost } from '../actions/posts'
import { connect } from 'react-redux'

class PostForm extends Component {
  state = {
    title: '',
    category: '',
    body: '',
  }

  handleChange = (e) => {
    const stateItem = e.target.id
    const value = e.target.value

    this.setState(() => ({
      [stateItem]: value
    }))
  }

  handleSubmit = (e) => {
    e.preventDefault()

    this.props.dispatch(handleAddPost(
      this.state.title,
      this.state.category,
      this.state.body,
    ))

    // this.setState(() => ({
    //   title: '',
    //   category: '',
    //   body: '',
    // }))
  }

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor='title'>Title</label>
            <input
              type='text'
              id='title'
              placeholder='Post title goes here'
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </p>
          <p>
            <label htmlFor='category'>category</label>
            <select onChange={this.handleChange} value={this.state.category} id='category' required>
              <option value="">Pick one here...</option>
              <option value="react">react</option>
              <option value="redux">redux</option>
              <option value="udacity">udacity</option>
            </select>
          </p>
          <p>
            <label htmlFor='body'>Content</label>
            <textarea
              placeholder="Tell me everything"
              value={this.state.body}
              onChange={this.handleChange}
              className='textarea'
              id='body'
              required
            />
          </p>
          <p><input type="submit" className='button' /></p>
        </form>
      </Fragment>
    )
  }
}

export default connect()(PostForm)