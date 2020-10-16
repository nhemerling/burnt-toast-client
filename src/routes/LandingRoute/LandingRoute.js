import React, { Component } from 'react';
import LandingForm from '../../components/LandingForm/LandingForm';
import './LandingRoute.css'
class LandingRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props;
    history.push('/login');
  }



  render() {
    return (
      <div className="LandingPage">
        <section className="LandingPage-hero">
          <h1>Burt-Toast-App-Name</h1>
          <p>This is where our copy goes.</p>
          <p>This is where our copy goes.</p>
          <p>This is where our copy goes.</p>
          {/* TODO: make a button?  */}
          <a href="#register-Form" className='signUp-focus'>
                  Sign up today!
                </a>
        </section>
        <section className="LandingPage-general periwinkle">
          <h2>General Information</h2>
          <p>This is where our copy goes.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
        <section className="LandingPage-how-it-works">
          <h2>How It Works</h2>
          <p>This is where our copy goes.</p>
          <p>Screenshots as well here.</p>
        </section>
        <section className="LandingPage-why periwinkle">
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

export default LandingRoute;
