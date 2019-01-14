import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/post/new'>Create New Post</NavLink></li>
        </ul>
      </nav>
    )
  }
}

export default Navigation