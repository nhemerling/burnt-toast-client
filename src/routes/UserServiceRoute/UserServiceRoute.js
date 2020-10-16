import React, { Component } from 'react';
import ProfilePicture from '../../images/user-placeholder.jpg';
import STORE from '../../contexts/Store';
import '../../components/ServiceCard/ServiceCard.css';
import ServiceHolder from '../../images/service-placeholder.png';
import BurntToastService from '../../services/burnt-toast-api-service';

export class ServiceCardRoute extends Component {
  state = {
    user: {},
    userServices: []
  };

  componentDidMount() {
    this.setState({user: BurntToastService.getProfile(ID)});
    this.setState({userServices: BurntToastService.getProfileServices(ID)});
  }

  render() {
    const services = STORE.serviceCards.cards;
    // TODO: ONLY POPULATE IF USER ID === PROFILE VISIT ID 
    const serviceList = services.map((services, i) => {
      return (
        <div key={i} className='service'>
          <img src={ServiceHolder} alt='image with chart of different service categories' className='service-img'></img>
          <h3>{services.category}</h3>
          <h3>{services.service}</h3>
          <p>{services.description}</p>
        </div>
      )
    })

    return (
      <div>
        <h2>{this.state.user.username}'s Profile</h2>
        <section className='user-info-section' style={{ border: '2px solid black', width: '80%', margin: 'auto' }}>
          <img style={{ maxWidth: 60 }} src={ProfilePicture} alt='user profile picture' className='user-profile-photo'></img>
          <p>{this.state.user.name}</p>
          <p>{this.state.user.bio}</p>
        </section>

        {serviceList}
      </div>
    )
  }
}

export default ServiceCardRoute

