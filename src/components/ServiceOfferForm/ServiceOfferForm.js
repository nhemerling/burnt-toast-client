import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
// import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
// import STORE from '../../contexts/Store';
import BurntToastService from '../../services/burnt-toast-api-service';
import BurntToastContext from '../../contexts/BurntToastContext';
import './ServiceOfferForm.css';

class LoginForm extends Component {

  static contextType = BurntToastContext;

  state = {
    success: null,
    error: null,
    selection: null,
    category: null,
    services: []
  };

  handleSubmit = ev => {
    ev.preventDefault();

    let service = {
      user_skill_type: 'PROVIDER',
      skill_id: this.state.category,
      skill_desc: ev.target['service-title-input'].value
    };

    BurntToastService.postProfileService(service)
    .then(res => {
      this.setState({
        success: "Added 'Service Offer' Successfully"
      })

      setTimeout(() => {
        this.setState({
          success: false
        })
      }, 4000)

      this.props.reload();
    })
    .catch(res => {
      this.setState({ error: res.error });
    });
  };


  handleSelection =ev => {
    let userSelection = ev.target.value;
    let services = this.context.services;
    this.setState({
      category: null
    })

    let matchingServices = [];
    for (let i = 0; i < services.length; i++) {
      if (userSelection == services[i].fk_category_id) {
        matchingServices.push(services[i]);
      }
    }
    let serviceOptions = this.generateServiceSelection(matchingServices);
    this.setState({
      error: null,
      selection: userSelection,
      services: serviceOptions
    });
  }

  handleCategory =ev => {
    let userSelection = ev.target.value;
    this.setState({
      error: null,
      category: userSelection,
    });
  }

  generateServiceSelection(arr) {
   let services = [];
    for (let i = 0; i < arr.length; i++) {
      let option = (<option key={i} value={arr[i].id}>{arr[i].skill_name}</option>);
      services.push(option);
    }
    return services;
  };




  render() {
    const { error, success} = this.state;
    let categories = this.context.categories ? this.context.categories : [];
    const categoryList = categories.map(category => {
      return (<option key={category.id} value={category.id}>{category.category_name}</option>)
    })
    const primaryServices = this.state.services ? this.state.services : [];

    return (
      <form
        className='ServiceOfferForm'
        onSubmit={this.handleSubmit}
      >
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
        </div>
        <h3>Add New 'Service Offer' Post</h3>
        <div className='ServiceOffer-form-div'>
          <div className='ServiceOffer-form-div'>
            <Label htmlFor='primary-category-selection'>
              Select a category:
            </Label>
            <select
              name="categories"
              id="primary-category-selection"
              form="ServiceOfferForm"
              onChange={this.handleSelection}
              >
              <option value=''>------SELECT------</option>
              {categoryList}

            </select>
          </div>
          <div className='ServiceOffer-form-div'>
            <Label htmlFor='service-category-selection'>
              Select a service:
            </Label>
            <select
              name="services"
              id="service-category-selection"
              form="ServiceOfferForm"
              //TODO: HANDLE THIS SELECTION VALUE
              onChange={this.handleCategory}
              >
              <option value=''>------SELECT------</option>
              {primaryServices}
            </select>
          </div>
          <Label htmlFor='service-title-input'>
          Service Title/Header
          </Label>
          <br/>
          <Input
            id='service-title-input'
            name='title'
            required
          />
        </div>

        <Button type='submit' className='add-service-button'>
          Add Service
        </Button>
      </form>
    );
  }
}

export default LoginForm;
