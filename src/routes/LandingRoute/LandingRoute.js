import React, { Component } from 'react';
import LandingForm from '../../components/LandingForm/LandingForm';
import HeroImg from '../../images/LandingPage/hero.png';
import PostImg from '../../images/LandingPage/forms.png';
import SearchImg from '../../images/LandingPage/searchPosts.png';
import ChatImg from '../../images/LandingPage/chat.png';
import SwapImg from '../../images/LandingPage/swap.png';
import SignupImg from '../../images/LandingPage/signup.png';
import './LandingRoute.css'
class LandingRoute extends Component {
  static defaultProps = {
    history: {
      push: () => { },
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
          <h1>Burnt Toast</h1>
          <div className='hero-content'>
            <div >
              <img src={HeroImg} className='hero-image' alt='An illustration of two people chatting and shaking hands'></img>
            </div>
            <div className= 'hero-content-paragraphs'>
              <p>Helping users barter services transparently.</p>
              <p>Post what you can provide or what service you seek and get connected...</p>
              <p>No currency exchanged! Only the knowledge and the passion for your craft &#59;&#41;. </p>
            </div>
          </div>

          <br />
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
          <img src={PostImg} className='how-it-works-img' alt=''></img>
          <p>1. Make a post! </p>
          <p>Are you offering up your awesome painting skills? Seeking someone who knows Web Design? </p>
          <img src={SearchImg} className='how-it-works-img' alt='' ></img>
          <p>2. Search your local postings! </p>

          <img src={ChatImg} className='how-it-works-img' alt=''></img>
          <p>3. If you find a match... chat it up!</p>

          <img src={SwapImg} className='how-it-works-img' alt=''></img>
          <p>4. Swap services. Repeat.</p>
        </section>
        <section className="LandingPage-register">
          <h2>Join the Toasty Community!</h2>
          <img src={SignupImg} className='register-img' alt=''></img>
          <br />

          <LandingForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
        <section className="LandingPage-why">
          <h2 className='periwinkle'>Still Not Convinced?</h2>
          <p>Read some reviews of our satisfied users</p>
        </section>
      </div>
    );
  }
}

export default LandingRoute;
