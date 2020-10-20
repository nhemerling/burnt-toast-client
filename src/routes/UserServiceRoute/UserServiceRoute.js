import React, { Component } from 'react';
import '../../components/ServiceCard/ServiceCard.css';
import ServiceHolder from '../../images/service-placeholder.png';
import BurntToastService from '../../services/burnt-toast-api-service';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

export class ServiceCardRoute extends Component {
  state = {
    user: {},
    userId: 1,
    userServices: []
  };

  componentDidMount() {
    let currentUserId = this.props.match.params.profile_id;

    // this.setState({user: BurntToastService.getProfile(this.props.match.params.profile_id).then(res => res)});
    // this.setState({userServices: BurntToastService.getProfileServices(this.props.match.params.profile_id).then(res => res)});
    BurntToastService.getProfile(currentUserId).then(res => {
      this.setState({user: res, userId: currentUserId});
    });
    BurntToastService.getProfileServices(currentUserId).then(res => {
      this.setState({userServices: res});
    });
  }

  render() {
    const services = this.state.userServices;
    console.log(services);

    const serviceList = this.state.userServices.map((services, i) => {
      return (
        <div key={i} className='service'>
          <ServiceCard 
            // image
            // service
            // description
          />
        </div>
      )
    })

    console.log(this.state.user);
    console.log(this.state.userId);
    console.log(this.state.userServices);

    if (this.state.user) {
      return (<div>
      <h2>{this.state.user.full_name}'s Profile</h2>
      <section className='user-info-section' style={{ border: '2px solid black', width: '80%', margin: 'auto' }}>
        <img style={{ maxWidth: 60 }} src={this.state.user.profile_img_url} alt='user profile picture' className='user-profile-photo'></img>
        <p>{this.state.user.profile_desc}</p>
      </section>

      {serviceList}
    </div>);
    } else {
      return <h1>YOU DONE EFFED UP</h1>;
    }
  }
}

export default ServiceCardRoute;

