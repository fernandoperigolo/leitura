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
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            <h3>Create a New Post</h3>
            {this.props.loading === 0
              ? <PostForm />
              : <p>Loading...</p>
            }
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({loadingBar}) {
  return {
    loading: loadingBar.default,
  }
}

export default connect(mapStateToProps)(PostNew)