import React, { Component } from 'react';
import ServiceOfferForm from '../../components/ServiceOfferForm/ServiceOfferForm';
import ServiceSeek from '../../components/ServiceSeek/ServiceSeek';
import PersonalizeProfile from '../../components/PersonalizeProfileForm/PersonalizeProfileForm';
import './EditProfileRoute.css'
import BurntToastContext from '../../contexts/BurntToastContext';

export class EditProfileRoute extends Component {

  static contextType = BurntToastContext;

  componentDidMount() {
    this.context.getCategoriesAndServices();
  }

  render() {

    return (
      <div>
        <h2>User Edit Profile View</h2>
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
