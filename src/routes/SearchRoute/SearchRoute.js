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
    serviceResults: []
  };

  static contextType = BurntToastContext;

  // componentDidMount() {
  //   BurntToastService.getAllServices()
  //   .then(services =>
  //     this.setState({
  //       services
  //     })
  //   )
  // }

  handleSearch(e) {
    e.preventDefault();
    const { searchService, searchTerm } = this.state;
    BurntToastService.getSearchServices(searchService, searchTerm)
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