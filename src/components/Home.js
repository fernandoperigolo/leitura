import React, { Component, Fragment } from 'react'
import PostList from './PostList'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handleHomeData } from '../actions/views'
import { setSortingConfig } from '../actions/user'

class Home extends Component {
  componentDidMount() {
    this.props.dispatch(handleHomeData())
  }

  handleSetSorting = (e, sort) => {
    e.preventDefault()

    const { dispatch } = this.props

    dispatch(setSortingConfig(sort))
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
                  <p className='category-order'>
                    Order by:
                    {Object.keys(this.props.postsSortingBy).map(sort =>
                      <button key={sort} onClick={(e) => this.handleSetSorting(e, sort)} className='button-action'>{sort} - {this.props.postsSortingBy[sort] ? 'true' : 'false'}</button>
                    )}
                  </p>
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
  let postsIds = []
  if(postsSortingBy.votes === true){
    postsIds = Object.keys(posts).sort(function(a,b){return posts[b].voteScore - posts[a].voteScore})
  }
  if(postsSortingBy.comments === true){
    postsIds = Object.keys(posts).sort(function(a,b){return posts[b].commentCount - posts[a].commentCount})
  }
  if(postsSortingBy.time === true){
    postsIds = Object.keys(posts).sort(function(a,b){return posts[b].timestamp - posts[a].timestamp})
  }
  return {
    postsIds,
    loading: loadingBar.default,
    postsSortingBy,
  }
}

export default connect(mapStateToProps)(Home)