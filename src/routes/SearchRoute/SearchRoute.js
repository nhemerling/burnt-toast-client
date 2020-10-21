import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Label } from '../../components/Form/Form';
import Button from '../../components/Button/Button';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import BurntToastContext from '../../contexts/BurntToastContext';
// import CategorySelect from '../../components/CategorySelect/CategorySelect';
import BurntToastService from '../../services/burnt-toast-api-service';
import './SearchRoute.css'

class SearchRoute extends Component {

  state = {
    searchTerm: '',
    searchCategory: '',
    searchService: '',
    // categories: [],
    // services: [],
    searchType: 'PROVIDER',
    searchZip: '',
    serviceResults: [],
  };

  static contextType = BurntToastContext;

  componentDidMount() {
    this.context.getCategoriesAndServices();
    // BurntToastService.getAllCategories().then(categories =>
    //   this.setState({
    //     categories
    //   })
    // );
    // BurntToastService.getAllServices().then(services =>
    //   this.setState({
    //     services
    //   })
    // );
  }

  handleSearch(e) {
    e.preventDefault();
    const { searchTerm, searchType, searchZip, searchService } = this.state;
    // const { searchService } = this.context;
    // console.log('searchService in context: ', searchService)

    BurntToastService.getSearchServices(searchService, searchTerm, searchType, searchZip)
    .then(serviceResults => {
      console.log(serviceResults)
      this.setState({
        serviceResults
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
        {/* <CategorySelect categories={categories} services={services} /> */}
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

  renderServiceCards() {
    const { serviceResults } = this.state;
    // const { searchService } = this.context;
    return serviceResults.map((service, i) =>
      // console.log(service)
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

  render() {
    return (
      <>
        <div className="SearchRoute">
          {this.renderSearchBar()}
          <ul className="SearchRoute-services-list">
          {this.renderServiceCards()}
          </ul>
        </div>
      </>
    );
  };
}

export default SearchRoute;