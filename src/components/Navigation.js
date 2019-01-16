import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          {Object.keys(this.props.categories).map(categorie =>
            <li key={this.props.categories[categorie].path}><NavLink to={`/category/${this.props.categories[categorie].path}`}>{this.props.categories[categorie].name}</NavLink></li>
          )}
          <li><NavLink to='/post/new'>Create New Post</NavLink></li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps ({categories}) {
  return {
    categories
  }
}

export default connect(mapStateToProps)(Navigation)