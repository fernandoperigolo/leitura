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
            {this.props.loading === 0
              ? <Fragment>
                  <p>
                    Order by:
                    <button>Votes</button>
                    <button>Comments</button>
                    <button>Time</button>
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

function mapStateToProps ({posts, loadingBar}) {
  return {
    postsIds: Object.keys(posts),
    loading: loadingBar.default,
  }
}

export default connect(mapStateToProps)(Category)