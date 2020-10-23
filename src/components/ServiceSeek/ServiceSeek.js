import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import BurntToastContext from '../../contexts/BurntToastContext';
import Button from '../Button/Button';
import BurntToastService from '../../services/burnt-toast-api-service';
import './ServiceSeek.css'

export class ServiceSeek extends Component {
  
  state = {
    success: null,
    error: null,
    selection: null,
    category: null,
    services: []
  };
  
  static contextType = BurntToastContext;
  
  handleSubmit = ev => {
    ev.preventDefault();
    let service = {
      user_skill_type: 'SEEKER',
      skill_id: this.state.category,
    };
    BurntToastService.postProfileService(service)
    .then(res => {
      this.setState({
        success: "Added 'Service Seek' Successfully"
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
        className='ServiceSeekForm'
        onSubmit={this.handleSubmit}
      >
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
        </div>
        <h3>Add New 'Seeking Service' Post</h3>
        <div className='ServiceSeek-form-div'>
          <div className='ServiceSeek-form-div'>
            <Label htmlFor='primary-category-selection-seekForm'>
              Select a category:
            <select 
              name="categories" 
              id="primary-category-selection-seekForm" 
              form="ServiceSeekForm"
              onChange={this.handleSelection}

              >
              <option value=''>------SELECT------</option>
              {categoryList}
            </select>
          </Label>
          </div>

          <div className='ServiceOffer-form-div'>
            <Label htmlFor='service-category-selection-seekForm'>
              Select a service:
            </Label>
            <select
              name="services"
              id="service-category-selection-seekForm"
              form="ServiceOfferForm"
              onChange={this.handleCategory}
              >
              <option value=''>------SELECT------</option>
              {primaryServices}
            </select>
          </div>
        </div>
         
         {/* TODO: FIND A BETTER NAME FOR THIS BUTTON */}
        <Button type='submit' className='add-service-button'>
          Add Service
        </Button>
      </form>
    );
  }
}

export default ServiceSeek
