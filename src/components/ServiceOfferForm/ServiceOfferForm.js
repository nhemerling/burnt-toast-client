import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import STORE from '../../contexts/Store';
import BurntToastService from '../../services/burnt-toast-api-service';
import './ServiceOfferForm.css';

class LoginForm extends Component {

  static contextType = UserContext;

  state = {
    error: null,
    generateSecondaryCatergories: () => { },
    selection: null,
    category: null
  };

  handleSubmit = ev => {
    ev.preventDefault();
    let desc = ev.target.title.value;
    let service = { 
      skill_id: 1, 
      skill_desc: desc
    };

    BurntToastService.postProfileService(service)
    .then(res => console.log(res));
    // .catch(res => {
    //   this.setState({ error: res.error });
    // });
  };


  handleSelection =ev => {
    let userSelection = ev.target.value;
    this.setState({
      error: null,
      selection: userSelection,
    });
  }

  handleCategory =ev => {
    let userSelection = ev.target.value;
    this.setState({
      error: null,
      category: userSelection,
    });
  }

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
        className='ServiceOfferForm'
        onSubmit={this.handleSubmit}
      >
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
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
              {categoryList}

            </select>
          </div>
          <div className='ServiceOffer-form-div'>
            <Label htmlFor='service-category-selection'>
              Select a service:
            </Label>
            <select
              name="categories"
              id="service-category-selection"
              form="ServiceOfferForm"
              //TODO: HANDLE THIS SELECTION VALUE
              onChange={this.handleCategory}
              >
              {servicesList}
            </select>
          </div>
          <Label htmlFor='service-title-input'>
            Title/Header
          </Label>
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
