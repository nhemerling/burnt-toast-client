import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import Button from '../Button/Button';
import BurntToastService from '../../services/burnt-toast-api-service';
import UserContext from '../../contexts/UserContext';
import './ServiceOfferForm.css';

class ServiceOfferForm extends Component {

  static contextType = UserContext;

  state = {
    success: null,
    error: null,
    selection: null,
    category: '',
    service: '',
  };

  handleSubmit = ev => {
    ev.preventDefault();

    let service = {
      user_skill_type: 'PROVIDER',
      skill_id: this.state.service,
      skill_desc: ev.target['service-title-input'].value
    };

    BurntToastService.postProfileService(service)
    .then(res => {
      this.setState({
        success: "Added 'Service Offer' Successfully",
        category: '',
        service: '',
      })

      setTimeout(() => {
        this.setState({
          success: false
        })
      }, 4000)

      document.getElementById('ServiceOfferForm').reset()
      this.props.getProfileServices();
    })
    .catch(res => {
      this.setState({ error: res.error });

      setTimeout(() => {
        this.setState({
          error: null
        })
      }, 10000)
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

  generateCategoryOptions(allCategories) {
    return allCategories.map(category =>
      <option key={category.id} value={category.id}>{category.category_name}</option>
    );
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
    const categoryOptions = this.generateCategoryOptions(categories);
    const serviceOptions = this.generateServiceOptions(services);
    return (
      <form
        id='ServiceOfferForm'
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
              onChange={this.handleCategorySelect}
              >
              <option value=''>------SELECT------</option>
              {categoryOptions}
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
              onChange={this.handleServiceSelect}
              >
              <option value=''>------SELECT------</option>
              {serviceOptions}
            </select>
          </div>
          <Label htmlFor='service-title-input'>
          Service Description:
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

export default ServiceOfferForm;
