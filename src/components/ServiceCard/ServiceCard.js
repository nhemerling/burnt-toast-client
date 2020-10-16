import React, { Component } from 'react';
import './ServiceCard.css'

class ServiceCard extends Component {
  render() {
    return(
      <div className="ServiceCard">
        <img src="" alt={this.props.category} />
        {/* <p>{this.props.user.full_name}</p> */}
        <p>{this.props.service}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ServiceCard;