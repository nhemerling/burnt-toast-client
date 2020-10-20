import React, { Component } from 'react';
import LandingForm from '../../components/LandingForm/LandingForm';
import HeroImg from '../../images/hero.png'
import './LandingRoute.css'
class LandingRoute extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { history } = this.props
    history.push('/login');
  }



  render() {
    return (
      <div className="LandingPage">
        <section className="LandingPage-hero blue">
          <h1>Burt Toast</h1>
          <img src={HeroImg} className='hero-image'></img>
          <p>Helping users barter services transparently.</p>
          <p>Post what you can provide or what service you seek and get connected..</p>
          {/* TODO: make a button?  */}
          <br/>
          <a href="#register-Form" className='signUp-focus'>
                  Sign up today!
                </a>
        </section>
        <section className="LandingPage-general">
          <h2 className='periwinkle'>Our Philosophy</h2>
          <p>This is where our copy goes.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </section>
        <section className="LandingPage-how-it-works">
          <h2>How It Works</h2>
          <p>This is where our copy goes.</p>
          <p>Screenshots as well here.</p>
        </section>
        <section className="LandingPage-why">
          <h2 className='periwinkle'>Why Use Burnt Toast?</h2>
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
