import React, { Component } from 'react';
import BurntToastContext from '../../contexts/BurntToastContext';
import './CategorySelect.css'

export default class CategorySelect extends Component {
  state = {
    selectedCategoryId: 1,
  }

  static contextType = BurntToastContext;

  handleCategoryChange = (ev) => {
    const selectedCategoryId = ev.target.value;
    this.setState({
      selectedCategoryId,
    })
    let serviceIds = [];
    let categoryServices = this.context.services.filter(service => Number(service.fk_category_id) === Number(selectedCategoryId));
    categoryServices.forEach((service) => serviceIds.push(service));

    this.context.setSearchService(serviceIds[0]);
  }

  handleServiceChange = (ev) => {
    this.context.setSearchService(ev.target.value)
  }

  generateServiceOptions(allServices) {
    let serviceOptions = [];
    let i = 0;

    for (let key in allServices) {
      if (Number(allServices[key].fk_category_id) === Number(this.state.selectedCategoryId)) {
        let option = (<option key={i} value={allServices[key].id}>{allServices[key].skill_name}</option>);
        serviceOptions.push(option);
      }
      i++;
    }

    return serviceOptions;
  };

  render() {
    const { categories, services } = this.props;
    const categoryOptions = categories.map(category => {
      return <option key={category.id} value={category.id}>{category.category_name}</option>
    })
    const serviceOptions = this.generateServiceOptions(services);

    return (
      <div className="CategorySelect">
        <label htmlFor="categories">Category </label>
        <select name="categories" id='categories' onChange={this.handleCategoryChange}>
          <option key='0' value=''>SELECT </option>
          {categoryOptions}
        </select>
        <label htmlFor="services">Service </label>
        <select name="services" id='services' onChange={this.handleServiceChange}>
          <option key='0' value=''>SELECT </option>
          {serviceOptions}
        </select>
      </div>
    );
  }
}