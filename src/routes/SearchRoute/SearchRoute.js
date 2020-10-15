import React, { Component } from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import store from '../../contexts/Store';

const dummyServices = [
  {
    id: '1',
    user: {
      user_id: 1,
      full_name: 'Jim Parsons',
    },
    name: 'dodgeball',
    description: 'I dodge balls real good.',
  },
  {
    id: '2',
    user: {
      user_id: 1,
      full_name: 'Jim Parsons',
    },
    name: 'paint',
    description: 'I paint stuff real good.',
  },
  {
    id: '3',
    user: {
      user_id: 1,
      full_name: 'Jim Parsons',
    },
    name: 'move',
    description: 'I strong, help you move house real good.',
  },
  {
    id: '4',
    user: {
      user_id: 1,
      full_name: 'Jim Parsons',
    },
    name: 'design furniture',
    description: 'I design furnite real good, fair trade.',
  },
];

class SearchRoute extends Component {

  state = {
    searchTerm: '',
    searchCategory: '',
    skills: [],
  };

  handleSearch(e) {
    e.preventDefault();
    // fetch(`BASE_URL/skills?${this.state.searchTerm}`)
    //   .then(res => res.json())
    //   .then(result => this.setState({skills: result}));
  }

  handleSearchTerm(e) {
    console.log(this.state.searchTerm);
    this.setState({
      searchTerm: e.target.value
    });
  }

  renderSearchBar() {
    const categories = Object.keys(store.CATEGORIES);
    const searchOptions = categories.map(category => {
      return <option value={category}>{category}</option>
    })
    
    return (
      <form id="search-bar" onSubmit={e => this.handleSearch(e)}>
        <label htmlFor="search"></label>
        <input 
          name="search" type="text" placeholder="🔍 Search" 
          onChange={e => this.handleSearchTerm(e)}>
        </input>
        <label htmlFor="categories"></label>
        <select name="categories">
          {searchOptions}
        </select>
      </form>
    );
  }

  renderServiceCards() {
    return dummyServices.map((service, i) =>
      <li key={i}>
        <ServiceCard
          id={service.id}
          name={service.name}
          description={service.description}
          user={service.user}
        />
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