import React, { Component } from 'react';
import BurntToastService from '../../services/burnt-toast-api-service'
import ProfilePicture from '../../images/user-placeholder.jpg';
import STORE from '../../contexts/Store';
import UserContext from '../../contexts/UserContext';

import '../../components/ServiceCard/ServiceCard.css';
import ServiceHolder from '../../images/service-placeholder.png';

export class ServiceCardRoute extends Component {
  state = {
    services: [],
    error: null
  }

  static contextType = UserContext;

// TODO implement fetch call 
  // componentDidMount() {
  //   let userId = this.props.userId;
  //   BurntToastService.getProfileServices(userId)
  //     .then(res => 
  //       this.setState({
  //           services: res.services
  //         })
  //     )
  //      .catch(res => {
  //       this.setState({ error: res.error });
  //     });
  // }

  render() {
    // const { error } = this.state;
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
