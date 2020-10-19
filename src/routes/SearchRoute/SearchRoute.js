import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import BurntToastContext from '../../contexts/BurntToastContext';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import BurntToastService from '../../services/burnt-toast-api-service';

class SearchRoute extends Component {

  state = {
    searchTerm: '',
    searchCategory: '',
    searchService: '',
    searchType: 'PROVIDER',
    searchZip: '',
    serviceResults: [],
  };

  static contextType = BurntToastContext;

  handleSearch(e) {
    e.preventDefault();
    const { searchTerm, searchType, searchZip } = this.state;
    const { searchService } = this.context;

    BurntToastService.getSearchServices(searchService, searchTerm, searchType, searchZip)
    .then(serviceResults => {
      this.setState({
        serviceResults
      })
    })
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
    })
  }

  handleZipChange = (ev) => {
    const searchZip = ev.target.value;
    this.setState({
      searchZip,
    })
  }

  renderSearchBar() {
    return (
      <form id="search-bar" onSubmit={e => this.handleSearch(e)}>
        <label htmlFor="search"></label>
        <input
          name="search" type="text" placeholder="🔍 Search"
          onChange={e => this.handleSearchTerm(e)}>
        </input>
        <label htmlFor="categories"></label>
        <CategorySelect />
        <label htmlFor="type">What are you looking for?</label>
        <select name="type" onChange={this.handleTypeChange}>
          <option key={1} value="PROVIDER">People PROVIDING this service.</option>
          <option key={2} value="SEEKER">People SEEKING this service.</option>
        </select>
        <label htmlFor="zipcode">Zipcode</label>
        <input type="text" name="zipcode" onChange={this.handleZipChange} />
        <button type="submit">Search</button>
      </form>
    );
  }

  renderServiceCards() {
    const { serviceResults, searchService } = this.state;
    return serviceResults.map((service, i) =>
      <li key={i}>
        <Link to={`/profiles/${service.fk_user_id}/services`}>
          <ServiceCard
            id={service.id}
            user_id={service.fk_user_id}
            service_id={service.fk_skill_id}
            service={searchService}
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