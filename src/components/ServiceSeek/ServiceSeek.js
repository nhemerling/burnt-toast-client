import React, { Component } from 'react';
import { Label } from '../Form/Form';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import BurntToastService from '../../services/burnt-toast-api-service';
import './ServiceSeek.css'

export class ServiceSeek extends Component {
  
  state = {
    success: null,
    error: null,
    selection: null,
    category: '',
    service: '',
    services: []
  };
  
  static contextType = UserContext;
  
  handleSubmit = ev => {
    ev.preventDefault();
    let service = {
      user_skill_type: 'SEEKER',
      skill_id: this.state.service,
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

  handleCategorySelect =ev => {
    this.setState({
      category: ev.target.value,
    });
  }

  handleServiceSelect =ev => {
    this.setState({
      service: ev.target.value,
    });
  }

  generateServiceOptions(allServices) {
    let serviceOptions = [];
    let i = 0;

    for (let key in allServices) {
      if (Number(allServices[key].fk_category_id) === Number(this.state.category)) {
        let option = (<option key={i} value={allServices[key].id}>{allServices[key].skill_name}</option>);
        serviceOptions.push(option);
      }
      i++;
    }

    return serviceOptions;
  };


  render() {
    const { error, success} = this.state;
    const { categories, services } = this.context;
    const categoryOptions = categories.map(category => {
      return <option key={category.id} value={category.id}>{category.category_name}</option>
    });
    const serviceOptions = this.generateServiceOptions(services);
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
              onChange={this.handleCategorySelect}

              >
              <option value=''>------SELECT------</option>
              {categoryOptions}
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
              onChange={this.handleServiceSelect}
              >
              <option value=''>------SELECT------</option>
              {serviceOptions}
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
