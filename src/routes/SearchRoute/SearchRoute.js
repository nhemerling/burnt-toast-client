import React, { Component } from 'react';
import ServiceCard from '../../components/ServiceCard/ServiceCard';

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

  renderServiceCards() {
    return dummyServices.map((service) =>
      <li>
        <ServiceCard
          key={service.id}
          name={service.name}
          description={service.description}
          user={service.user}
        />
      </li>
    );
  }

  render() {
    return (
      <div className="SearchRoute">
        <ul className="SearchRoute-services-list">
        {this.renderServiceCards()}
        </ul>
      </div>
    );
  }
}

export default SearchRoute;