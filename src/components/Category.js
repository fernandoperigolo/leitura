import React, { Component, Fragment } from 'react'
import PostList from './PostList'
import Header from './Header'
import Footer from './Footer'
import { connect } from 'react-redux'
import { handleCategoryData } from '../actions/views'

class Category extends Component {
  state = {
    currentCategory: '',
  }

  componentDidMount() {
    this.setState(() => ({
      currentCategory: this.props.match.params.categoryPath
    }))
    this.props.dispatch(handleCategoryData(this.props.match.params.categoryPath))
  }

  componentDidUpdate() {
    if (this.state.currentCategory !== this.props.match.params.categoryPath) {
      this.setState(() => ({
        currentCategory: this.props.match.params.categoryPath
      }))
      this.props.dispatch(handleCategoryData(this.props.match.params.categoryPath))
    }
  }

  render() {
    return (
      <Fragment>
        <Header />

        <div className='wrap-content'>
          <div className='content-container'>
            <h3>Category - {this.props.match.params.categoryPath}</h3>
            {this.props.postsIds.length
              ? <PostList postsIds={this.props.postsIds} />
              : <p>No posts here...</p>
            }
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