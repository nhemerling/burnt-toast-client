import React, { Component } from 'react';
import './ServiceCard.css'

class ServiceCard extends Component {
  render() {
    return(
        <div className="ServiceCard" >
          <p>Category: {this.props.category}</p>
          <p>Service: {this.props.service}</p>
          <p>Description: {this.props.description}</p>
        </div>
    );
  }
}

export default ServiceCard;