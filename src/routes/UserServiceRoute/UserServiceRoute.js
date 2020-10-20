import React, { Component } from 'react';
import ProfilePicture from '../../images/user-placeholder.jpg';
import STORE from '../../contexts/Store';
import '../../components/ServiceCard/ServiceCard.css';
import ServiceHolder from '../../images/service-placeholder.png';
import BurntToastService from '../../services/burnt-toast-api-service';

export class ServiceCardRoute extends Component {
  state = {
    user: {},
    userId: 1,
    userServices: []
  };

  componentDidMount() {
    let userId = this.props;
    console.log(userId);
    this.setState({user: BurntToastService.getProfile(this.props.match.params.profile_id).then(res => res)});
    this.setState({userServices: BurntToastService.getProfileServices(this.props.match.params.profile_id).then(res => res)});
    // BurntToastService.getProfile(userId).then(res => console.log(res));
    // BurntToastService.getProfileServices(userId).then(res => res.json())
  }

  render() {
    const services = this.state.userServices;
    console.log(services);
    // TODO: ONLY POPULATE IF USER ID === PROFILE VISIT ID 
    const serviceList = this.state.userServices.map((services, i) => {
      return (
        <div key={i} className='service'>
          <img src={ServiceHolder} alt='image with chart of different service categories' className='service-img'></img>
          <h3>{services.category}</h3>
          <h3>{services.service}</h3>
          <p>{services.description}</p>
        </div>
      )
    })

    console.log(this.state.user);
    console.log(this.state.userId);
    console.log(this.state.userServices);

    if (this.state.user) {
      return (<div>
      <h2>{this.state.user.username}'s Profile</h2>
      <section className='user-info-section' style={{ border: '2px solid black', width: '80%', margin: 'auto' }}>
        <img style={{ maxWidth: 60 }} src={ProfilePicture} alt='user profile picture' className='user-profile-photo'></img>
        <p>{this.state.user.name}</p>
        <p>{this.state.user.bio}</p>
      </section>
      {console.log(this.state.user + "AHHHHHHHHHH FUCK")}

      {serviceList}
    </div>);
    } else {
      return <h1>YOU DONE EFFED UP</h1>;
    }

    // return (
    //   <div>
    //     <h2>{this.state.user.username}'s Profile</h2>
    //     <section className='user-info-section' style={{ border: '2px solid black', width: '80%', margin: 'auto' }}>
    //       <img style={{ maxWidth: 60 }} src={ProfilePicture} alt='user profile picture' className='user-profile-photo'></img>
    //       <p>{this.state.user.name}</p>
    //       <p>{this.state.user.bio}</p>
    //     </section>
    //     {console.log(this.state.user + "AHHHHHHHHHH FUCK")}
    //     {serviceList}
    //   </div>
    // )
  }
}

export default ServiceCardRoute;

