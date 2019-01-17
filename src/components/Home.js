import React, { Component, Fragment } from 'react'
import PostList from './PostList'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handleHomeData } from '../actions/views'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleHomeData())
  }
  render() {
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            <h3>Home - All Posts</h3>
            <PostList postsIds={this.props.postsIds} />
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({posts}) {
  return {
    postsIds: Object.keys(posts)
  }
}

export default connect(mapStateToProps)(Home)