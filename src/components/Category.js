import React, { Component, Fragment } from 'react'
import PostList from './PostList'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handleCategoryData } from '../actions/views'

class Category extends Component {
  componentDidMount() {
    this.props.dispatch(handleCategoryData(this.props.match.params.categoryPath))
  }

  render() {
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            <h3>Category - {this.props.match.params.categoryPath}</h3>
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

export default connect(mapStateToProps)(Category)