import React, { Component } from 'react';
import BurntToastContext from '../../contexts/BurntToastContext';

export default class CategorySelect extends Component {
  state = {
    selectedCategoryId: 1,
  }

  static contextType = BurntToastContext;

  handleCategoryChange = (ev) => {
    this.setState({
      selectedCategoryId: ev.target.value,
    })
  }

  generateServiceOptions(obj) {
    let services = []
    let i = 0;
    for (let key in obj) {
      if (Number(obj[key].fk_category_id) === Number(this.state.selectedCategoryId)) {
        let option = (<option key={i} value={key}>{obj[key].skill_name}</option>);
        services.push(option);
      }
      i++;
    }
    return services;
  };

  render() {
    const { categories, services } = this.context;
    const categoryOptions = categories.map(category => {
      return <option key={category.id} value={category.id}>{category.category_name}</option>
    })
    const serviceOptions = this.generateServiceOptions(services);

    return (
      <div className="CategorySelect">
        <select name="categories" onChange={this.handleCategoryChange}>
          {categoryOptions}
        </select>
        <select name="services">
          {serviceOptions}
        </select>
      </div>
    );
  }
}