import React, { Component, Fragment } from 'react'
import PostForm from './PostForm'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handlePostNewData } from '../actions/views'

class PostNew extends Component {
  componentDidMount() {
    this.props.dispatch(handlePostNewData())
  }
  render() {
    console.log('this.props ', this.props)
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            <h3>Create a New Post</h3>
            <PostForm />
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

export default connect()(PostNew)