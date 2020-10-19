import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import STORE from '../../contexts/Store'
import './ServiceSeek.css'

export class ServiceSeek extends Component {
  static contextType = UserContext;

  state = {
    error: null,
    generateSecondaryCategories: () => { },
    selection: null
  };

  handleSubmit = ev => {
    ev.preventDefault();
    // const { } = ev.target;
    let userSelection = ev.target.value;

    this.setState({
      error: null,
      selection: userSelection,
    });
    // .catch(res => {
    //   this.setState({ error: res.error });
    // });
  };

  generateCategorySelection(obj) {
    let categories = []
    let i = 0;
    for (let key in obj) {
      let option = (<option key={i} value={key}>{key}</option>);
      categories.push(option);
      i++;
    }
    return categories;
  };

 


  render() {
    const { error } = this.state;
    const primaryCategories = this.generateCategorySelection(STORE.CATEGORIES);
    const categoryList = primaryCategories.map(category => {
      return (
        category
      )
    });

    const primaryServices = this.state.selection ? STORE.CATEGORIES[this.state.selection] : [];

    const servicesList = primaryServices.map((category, i) => {
      return (
        <option key={i} value={category}>{category}</option>
      );
    })
    return (
      <form
        className='ServiceSeekForm'
      >
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div className='ServiceSeek-form-div'>
          <div className='ServiceSeek-form-div'>
            <Label htmlFor='primary-category-selection-seekForm'>
              Select a category:
            <select 
              name="categories" 
              id="primary-category-selection-seekForm" 
              form="ServiceSeekForm"
              onChange={this.handleSubmit}
              >
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
              form="ServiceOfferForm">
              {servicesList}
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
