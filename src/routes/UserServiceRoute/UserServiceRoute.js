import React, { Component } from 'react';
import '../../components/ServiceCard/ServiceCard.css';
import BurntToastService from '../../services/burnt-toast-api-service';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import './UserServiceRoute.css'

export class UserServiceRoute extends Component {
  static defaultProps = {
    match: {
      params: {
        profile_id: 1
      }
    }
  }

  state = {
    user: {},
    userId: 1,
    userServices: [],
    profileError: null,
    servicesError: null,
  };

  componentDidMount() {
    let currentUserId = this.props.match.params.profile_id;
    this.setState({
      profileError: null,
      servicesError: null,
    });
    BurntToastService.getProfile(currentUserId)
      .then(res => {
        this.setState({user: res, userId: currentUserId});
      })
      .catch(error => this.setState({ profileError: error.error }));
    BurntToastService.getProfileServices(currentUserId)
      .then(res => {
      this.setState({userServices: res});
      })
      .catch(error => this.setState({ servicesError: error.error }));
  }

  render() {
    const serviceList = this.state.userServices.map((service, i) => {
      return (
          <ServiceCard
            key={i}
            image={service.primary_img_url}
            service={service.skill_name}
            category={service.category_name}
            type={service.user_skill_type}
            description={service.primary_description}
          />
      )
    });
    if (this.state.user.id) {
      return (
        <>
          <h2>{this.state.user.full_name}</h2>
          <section className='profile-info'>
            <div>
              <img src={'https://miro.medium.com/max/360/1*W35QUSvGpcLuxPo3SRTH4w.png'} alt='user profile avatar' className='user-profile-photo'></img>
              <p>ZIP Code: {this.state.user.zip}</p>
            </div>
            <div>
              <p>{this.state.user.profile_desc}</p>
              <button type='submit'><a href={`mailto:${this.state.user.email}?subject=Burnt Toast: Inquiry About Your Profile`}>Contact</a></button>
            </div>
          </section>
          <h3 id='user-name-services'>{this.state.user.full_name}'s Services</h3>
          <div className='service-card-list'>
            {serviceList}
          </div>
        </>
      );
    } else {
      return <h3>{this.state.profileError}</h3>
    }
  }
}

export default UserServiceRoute;

