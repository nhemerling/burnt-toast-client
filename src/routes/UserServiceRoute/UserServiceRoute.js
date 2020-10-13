import React, { Component } from 'react';
import ProfilePicture from '../../images/user-placeholder.jpg';

export class ServiceCardRoute extends Component {
  render() {
    return (
      <div>
        <h2>Username's Profile and Skills they offer</h2>
        <section className='user-info-section' style={{border: '2px solid black', width: '80%', margin: 'auto'}}> 
        <img style={{maxWidth: 60}} src={ProfilePicture} alt='user profile picture' className='userProfilePhoto'></img>
        <p>Username</p>
        <p>Bio if provided</p>
        </section>
      </div>
    )
  }
}

export default ServiceCardRoute
