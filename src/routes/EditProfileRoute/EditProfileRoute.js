import React, { Component } from 'react';
import ServiceOfferForm from '../../components/ServiceOfferForm/ServiceOfferForm';
import ServiceSeek from '../../components/ServiceSeek/ServiceSeek';
import PersonalizeProfile from '../../components/PersonalizeProfileForm/PersonalizeProfileForm';
import './EditProfileRoute.css'
import ProfileEditImg from '../../images/profile-edit.png'
import BurntToastContext from '../../contexts/BurntToastContext';

export class EditProfileRoute extends Component {

  static contextType = BurntToastContext;

  componentDidMount() {
    this.context.getCategoriesAndServices();
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
