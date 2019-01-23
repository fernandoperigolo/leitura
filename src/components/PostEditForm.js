import React, { Component, Fragment } from 'react'
import { handleEditPost } from '../actions/posts'
import { connect } from 'react-redux'

class PostEditForm extends Component {
  state = {
    ...this.props.post,
    submitedFlag: false,
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

    this.props.dispatch(handleEditPost(this.state))

    this.setState(() => ({
      submitedFlag: true,
    }))
  }

  render() {
    if(this.state.submitedFlag){
      return <p className='message-ok'>Your post was updated.</p>
    }
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
            <label htmlFor='category'>Category</label>
            <select onChange={this.handleChange} value={this.state.category} id='category' required>
              <option value="">Pick one here...</option>
              {Object.keys(this.props.categories).map(categorie =>
                <option value={this.props.categories[categorie].path} key={this.props.categories[categorie].path}>{this.props.categories[categorie].path}</option>
              )}
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
          <p><input type="submit" className='button' value='Update Post' /></p>
        </form>
      </Fragment>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(PostEditForm)