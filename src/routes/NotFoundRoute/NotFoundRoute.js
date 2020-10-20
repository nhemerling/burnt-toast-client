import React, { Component } from 'react'
import NotFoundImage from '../../images/notfound.png'

class NotFoundRoute extends Component {
  render() {
    return (
      <section>
        <h2>404 - Page not found</h2>
        <img src={NotFoundImage} alt=''></img>
        <p>Try going back to your previous page.</p>
      </section>
    );
  }
}

export default NotFoundRoute
