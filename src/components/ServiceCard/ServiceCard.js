import React, { Component } from 'react';
import './ServiceCard.css'
import ServiceHolder from '../../images/service-placeholder.png';

class ServiceCard extends Component {
  render() {
    return(
        <div className="ServiceCard" >
          <img src={ServiceHolder} className='service-img'></img>
          <p>Category: {this.props.category}</p>
          <p>Service: {this.props.service}</p>
          <p>Description: {this.props.description}</p>
        </div>
    );
  }
}

export default ServiceCard;