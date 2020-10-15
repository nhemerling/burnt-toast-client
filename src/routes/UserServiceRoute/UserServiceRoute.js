import React, { Component } from 'react';
import ProfilePicture from '../../images/user-placeholder.jpg';
import STORE from '../../contexts/Store';
import '../../components/ServiceCard/ServiceCard.css';
import ServiceHolder from '../../images/service-placeholder.png';

export class ServiceCardRoute extends Component {
  render() {
    const services = STORE.serviceCards.cards;
    // TODO: ONLY POPULATE IF USER ID === PROFILE VISIT ID 
    const serviceList = services.map((services, i) => {
      return (
        <div key={services.id} className='serviceDisplayCard'>
          <img src={ServiceHolder} alt='image with chart of different service categories' className='service-img'></img>
          <h3>{services.category}</h3>
          <h3>{services.service}</h3>
          <p>{services.description}</p>
        </div>
      )
    })
    return (
      <div>
        <h2>Username's Profile and Skills they offer</h2>
        <section className='user-info-section' style={{ border: '2px solid black', width: '80%', margin: 'auto' }}>
          <img style={{ maxWidth: 60 }} src={ProfilePicture} alt='user profile picture' className='userProfilePhoto'></img>
          <p>Username</p>
          <p>Bio if provided</p>
        </section>

        {serviceList}
      </div>
    )
  }
}

export default ServiceCardRoute
