import React, { Component } from 'react';
import LandingForm from '../../components/LandingForm/RegistrationForm';
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
              <p>No currency is ever exchanged! You only swap the knowledge and the passion for your craft &#59;&#41;. </p>
            </div>
          </div>

          <br />
          <a href="#signup-link" className='signUp-focus'>
            Sign up today!
                </a>
        </section>
        <section className="LandingPage-philosophy">
          <h2 className='periwinkle'>Our Philosophy</h2>
          <p>Our story begins with a newly born adult that was pushed into the world and asked to adult.
              Where does one begin? How do you lift, bro? Oil change? Or Pickle?</p>
          <p>A common saying struck our collective minds: <q>It takes a village to raise a child.</q></p>
          <p>Thus, Burnt Toast and the Toasty community was born out of the need to share knowledge, without the need to exchange money.</p>
          <p>The simple Toasty way is to barter knowledge and skills within our community and grow from each other.</p>
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
          <h2 id='signup-link'>Join the Toasty Community!</h2>
          <img src={SignupImg} className='register-img' alt=''></img>
          <br />

          <LandingForm
            onRegistrationSuccess={this.handleRegistrationSuccess}
          />
        </section>
        <section className="LandingPage-testimonials">
          <h2 className='periwinkle'>Toastimonials</h2>
          <blockquote>"We're loving it. I love your system. Burnt Toast should be nominated for service of the year. 
            I like the Toasty community more and more each day because it makes my life a lot easier." -Shea Buttah.
          </blockquote>
          <blockquote>
          "It's all good. No matter where you go, Burnt Toast is the coolest, most happening thing around! 
          Burnt Toast is great. Just what I was looking for."
            -Peter Pocket.
          </blockquote>
          <blockquote>
            "Burnt Toast is worth much more than a product, it's community. Thanks y'all, keep up the good work! 
              I would like to personally thank you for your outstanding product."
            -Rye Kneed.
          </blockquote>
        </section>
      </div>
    );
  }
}

export default LandingRoute;
