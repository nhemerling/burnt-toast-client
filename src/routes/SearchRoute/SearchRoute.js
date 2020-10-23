import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Label } from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import BurntToastContext from '../../contexts/BurntToastContext';
import BurntToastService from '../../services/burnt-toast-api-service';
import './SearchRoute.css'

class SearchRoute extends Component {

  state = {
    searchTerm: '',
    searchCategory: '',
    searchService: '',
    searchType: 'PROVIDER',
    searchZip: '',
    serviceResults: [],
    loading: false,
    searchSubmitted: false,
  };

  static contextType = BurntToastContext;

  componentDidMount() {
    this.context.getCategoriesAndServices();
  }

  handleSearch(e) {
    e.preventDefault();
    const { searchTerm, searchType, searchZip, searchService } = this.state;

    this.setState({ loading: true });

    BurntToastService.getSearchServices(searchService, searchTerm, searchType, searchZip)
    .then(serviceResults => {
      this.setState({
        serviceResults,
        loading: false,
        searchSubmitted: true,
      })
    });
  }

  handleSearchTerm(e) {
    this.setState({
      searchTerm: e.target.value
    });
  }

  handleTypeChange = (ev) => {
    const searchType = ev.target.value;
    this.setState({
      searchType,
    });
  }

  handleZipChange = (ev) => {
    const searchZip = ev.target.value;
    this.setState({
      searchZip,
    });
  }

  handleCategorySelect = (ev) => {
    this.setState({
      searchCategory: ev.target.value,
    });
  }

  handleServiceSelect = (ev) => {
    this.setState({
      searchService: ev.target.value,
    });
  }

  generateServiceOptions(allServices) {
    let serviceOptions = [];
    let i = 0;
    for (let key in allServices) {
      if (Number(allServices[key].fk_category_id) === Number(this.state.searchCategory)) {
        let option = (<option key={i} value={allServices[key].id}>{allServices[key].skill_name}</option>);
        serviceOptions.push(option);
      }
      i++;
    }
    return serviceOptions;
  };

  generateServiceResults(serviceResults) {
    if (serviceResults.length === 0 && this.state.searchSubmitted) {
      return <li>Sorry, no users have yet to provide this service.</li>
    }
    return serviceResults.map((service, i) =>
      <li key={i}>
        <Link to={`/profiles/${service.fk_user_id}/services`}>
          <ServiceCard
            id={service.id}
            user_id={service.fk_user_id}
            service_id={service.fk_skill_id}
            service={service.skill_name}
            type={service.user_skill_type}
            image={service.primary_img_url}
            description={service.primary_description}
          />
        </Link>
      </li>
    );
  }

  renderSearchBar() {
    const { categories, services } = this.context;
    const categoryOptions = categories.map(category => {
      return <option key={category.id} value={category.id}>{category.category_name}</option>
    });
    const serviceOptions = this.generateServiceOptions(services);

    return (
      <form id="search-bar" onSubmit={e => this.handleSearch(e)}>
        <Label htmlFor="search"></Label>
        <Input
          name="search" id='search' type="text" placeholder="🔍 Search"
          onChange={e => this.handleSearchTerm(e)}>
        </Input>
        <Label htmlFor="categories">Category</Label>
        <select id="categories" onChange={this.handleCategorySelect} required>
          <option key={0} value=''>SELECT A CATEGORY</option>
          {categoryOptions}
        </select>
        <Label htmlFor="services">Service</Label>
        <select id="services" onChange={this.handleServiceSelect} required>
          <option key={0} value=''>SELECT A SERVICE</option>
          {serviceOptions}
        </select>
        <Label htmlFor="type">What are you looking for?</Label>
        <select name="type" id='type' onChange={this.handleTypeChange}>
          <option key={1} value="PROVIDER">People PROVIDING this service.</option>
          <option key={2} value="SEEKER">People SEEKING this service.</option>
        </select>
        <Label htmlFor="zipcode">Zipcode</Label>
        <Input type="text" name="zipcode" id='zipcode' onChange={this.handleZipChange} />
        <br/>
        <Button type="submit" className='search-button'>Search</Button>
      </form>
    );
  }

  render() {
    const serviceResults = this.generateServiceResults(this.state.serviceResults);
    return (
      <>
        <div className="SearchRoute">
          {this.renderSearchBar()}
          {this.state.loading && <h3>searching...</h3>}
          <ul className="SearchRoute-services-list">
          {serviceResults}
          </ul>
        </div>
      </>
    );
  };
}

export default SearchRoute;