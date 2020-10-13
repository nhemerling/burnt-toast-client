import React, { Component } from 'react'
import ServiceOfferForm from '../../components/ServiceOfferForm/ServiceOfferForm'
import ServiceSeek from '../../components/ServiceSeek/ServiceSeek'

export class EditProfileRoute extends Component {
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
      </div>
    )
  }
}

export default EditProfileRoute
