import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import Post from './Post'
import PostNew from './PostNew'
import PostEdit from './PostEdit'
import Category from './Category'
import Home from './Home'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Switch>
            <Route path='/category/:id' exact component={Category} />
            <Route path='/post/new' exact component={PostNew} />
            <Route path='/post/edit/:id' exact component={PostEdit} />
            <Route path='/post/:id' exact component={Post} />
            <Route path='/' exact component={Home} />
          </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default connect()(App)