import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import STORE from '../../contexts/Store'
import './ServiceOfferForm.css';

class LoginForm extends Component {

  static contextType = UserContext;

  state = {
    error: null,
    generateSecondaryCatergories: () => { },
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
    // const categories = ['Automotive & Industrial', 'Art', 'Beauty & Health', 'Computers', 'Education', 'Electronics','Food',
    //                     'Handmade','Home', 'Repair','Sports','Other',];
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
    console.log(servicesList)
    // const secondaryCategoryList = this.state.selection 
    //   ? this.state.generateSecondaryCatergories(key, obj=STORE.CATEGORIES) => {
    //       let secondaryCategories = obj[key];
    //       return secondaryCategories; 
    //     }
    //   : [];
    //     console.log(secondaryCategoryList)
    // const secondaryCategories = secondaryCategoryList.map((category, i) => {
    //   return (
    //     <option key={i} value={category}>{category}</option>
    //   );
    // })

    return (
      <form
        className='ServiceOfferForm'
        onChange={this.handleSubmit}
      >
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div className='ServiceOffer-form-div'>
          <div className='ServiceOffer-form-div'>
            <Label htmlFor='service-category-selection'>
              Select a category:
            </Label>
            <select
              name="categories"
              id="service-category-selection"
              form="ServiceOfferForm">
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
              form="ServiceOfferForm">
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
