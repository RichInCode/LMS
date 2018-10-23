import React, { Component } from 'react'

class Header extends Component {
  render () {
    return (
      <div className="demo-header">
        <div className="demo-header--title">Chat</div>
        <div className="demo-header--links">
          <a href="/">Home</a>
        </div>
      </div>
    )
  }
}

export default Header