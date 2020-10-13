import React, { Component } from 'react'
import LandingForm from '../../components/LandingForm/LandingForm'

class LandingRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login')
  }

  render() {
    return (
      <section>
        <h2>Sign up</h2>
        <LandingForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
      </section>
    );
  }
}

export default LandingRoute
