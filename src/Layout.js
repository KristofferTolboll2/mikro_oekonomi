import React, { Component } from 'react'
import NavBar from './NavBar'

export default class Layout extends Component {
  render() {
    return (
      <div>
        <NavBar /> {/* this could be your navbar */}
         {/*you could have mere stuff in here*/}

         {this.props.children} {/*here my content will get rendered */}
      </div>
    )
  }
}
