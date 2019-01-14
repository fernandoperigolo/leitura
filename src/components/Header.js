import React, { Component } from 'react'
import Navigation from './Navigation'

class Header extends Component {
  render() {
    return (
      <header>
        <div className='wrap-content'>
          <h1>Leitura</h1>
          <Navigation />
        </div>
      </header>
    )
  }
}

export default Header