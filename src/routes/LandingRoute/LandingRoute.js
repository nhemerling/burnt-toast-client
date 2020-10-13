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
      <div className="LandingPage">
        <section className="LandingPage-hero">
          <h2>Hero</h2>
          <p>This is where our copy goes.</p>
        </section>
        <section className="LandingPage-general">
          <h2>General Information</h2>
          <p>This is where our copy goes.</p>
        </section>
        <section className="LandingPage-how-it-works">
          <h2>How It Works</h2>
          <p>This is where our copy goes.</p>
          <p>Screenshots as well here.</p>
        </section>
        <section className="LandingPage-why">
          <h2>Why Use Burnt Toast?</h2>
          <p>This is where our copy goes.</p>
        </section>
        <section className="LandingPage-register">
          <h2>Sign up</h2>
          <LandingForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
            />
        </section>
      </div>
    );
  }
}

export default LandingRoute
