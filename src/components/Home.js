import React, { Component, Fragment } from 'react'
import PostList from './PostList'
import Header from './Header'
import Footer from './Footer'
import PostSort from './PostSort'
import { connect } from 'react-redux'
import { handleHomeData } from '../actions/views'
import { sortPosts } from '../utils/helpers'

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
            {this.props.loading === 0
              ? <Fragment>
                  <PostSort />
                  <PostList postsIds={this.props.postsIds} />
                </Fragment>
              : <p>Loading...</p>
            }
          </div>
        </div>

        <Footer />
      </Fragment>
    )
  }
}

function mapStateToProps ({posts, loadingBar, user}) {
  const postsSortingBy = user.config.postsSortingBy
  const postsIds = sortPosts(postsSortingBy, posts)

  return {
    postsIds,
    loading: loadingBar.default,
    postsSortingBy,
  }
}

export default connect(mapStateToProps)(Home)