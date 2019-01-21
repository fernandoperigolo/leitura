import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import LoadingBar from 'react-redux-loading'
import Post from './Post'
import PostNew from './PostNew'
import PostEdit from './PostEdit'
import Category from './Category'
import Home from './Home'
import PageNotFound from './PageNotFound';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <LoadingBar style={{backgroundColor: 'greenyellow'}} />
          <Switch>
            <Route path='/404' exact component={PageNotFound} />
            <Route path='/post/new' exact component={PostNew} />
            <Route path='/post/edit/:id' exact component={PostEdit} />
            <Route path='/:categoryPath/:id' exact component={Post} />
            <Route path='/:categoryPath' exact component={Category} />
            <Route path='/' exact component={Home} />
            <Route path='*' component={PageNotFound} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)