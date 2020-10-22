import React, { Component } from 'react';
import ServiceOfferForm from '../../components/ServiceOfferForm/ServiceOfferForm';
import ServiceSeek from '../../components/ServiceSeek/ServiceSeek';
import PersonalizeProfile from '../../components/PersonalizeProfileForm/PersonalizeProfileForm';
import BurntToastService from '../../services/burnt-toast-api-service';

import './EditProfileRoute.css'
import ProfileEditImg from '../../images/profile-edit.png'
import BurntToastContext from '../../contexts/BurntToastContext';

export class EditProfileRoute extends Component {

  state = {
    userServices: []
  }

  static contextType = BurntToastContext;

  componentDidMount() {
    this.context.getCategoriesAndServices();

    let currentUserId = this.props.match.params.profile_id;
    // BurntToastService.getProfile(currentUserId).then(res => {
    //   this.setState({user: res, userId: currentUserId});
    // });
    BurntToastService.getProfileServices(currentUserId).then(res => {
      console.log(res)
      // this.setState({userServices: res});
    });
  }

  render() {

    return (
      <div>
        <h2> Manage Profile</h2>
        <img src={ProfileEditImg} className='manage-profile-img' alt=''></img>
        <section>
          <ServiceOfferForm/>
        </section>

        <section>
          <ServiceSeek/>
        </section>
        <section>
        <PersonalizeProfile/>
        </section>
      </div>
    )
  }
}

export default EditProfileRoute
