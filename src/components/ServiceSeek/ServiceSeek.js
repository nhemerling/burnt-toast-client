import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import './ServiceSeek.css'

export class ServiceSeek extends Component {
  static contextType = UserContext;

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { } = ev.target;

    this.setState({ error: null });

   
      // .catch(res => {
      //   this.setState({ error: res.error });
      // });
  };


  render() {
    const { error } = this.state;
    const categories = ['Automotive & Industrial', 'Art', 'Beauty & Health', 'Computers', 'Education', 'Electronics','Food',
                        'Handmade','Home', 'Repair','Sports','Other',];
    const categoryList = categories.map(category => {return (
      <option value={category}>{category}</option>
    )})
    return (
      <form
        className='ServiceSeekForm'
        onSubmit={this.handleSubmit}
      >
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div className='ServiceSeek-form-div'>
          <div className='ServiceSeek-form-div'>
            <Label htmlFor='service-category-selection'>
              Select a category:
          </Label>
            <select 
              name="categories" 
              id="service-category-selection" 
              form="ServiceSeekForm">
              {categoryList}
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
