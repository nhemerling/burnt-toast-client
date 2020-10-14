import React, { Component } from 'react';

class ServiceCard extends Component {
  render() {
    return(
      <div className="ServiceCard">
        <img src="" alt={this.props.category} />
        <p>{this.props.user.full_name}</p>
        <p>{this.props.name}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default ServiceCard;