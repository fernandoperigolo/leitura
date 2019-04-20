import React, { Component, Fragment } from 'react'
import PostEditForm from './PostEditForm'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handlePostEditData } from '../actions/views'

class PostEdit extends Component {
  componentDidMount() {
    this.props.handlePostEditData()
  }
  render() {
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            <h3>Editing Post</h3>
            {this.props.loading === 0
              ? <PostEditForm post={this.props.post} />
              : <p>Loading...</p>
            }
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  handlePostEditData,
}

function mapStateToProps ({loadingBar, posts}, props) {
  return {
    loading: loadingBar.default,
    post: posts[props.match.params.id]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostEdit)
