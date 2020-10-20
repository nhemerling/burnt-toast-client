import React, { Component } from 'react';
import './ServiceCard.css'

// id={service.id}
// user_id={service.fk_user_id}
// service_id={service.fk_skill_id}
// service={searchService}
// type={service.user_skill_type}
// image={service.primary_img_url}
// description={service.primary_description}

class ServiceCard extends Component {
  render() {
    return(
        <div className="ServiceCard" >
          {this.props.image && <img src={this.props.image} alt="service provided image" />}
          {this.props.service && <h3>{this.props.service}</h3>}
          {this.props.description && <p>{this.props.description}</p>}
        </div>
    );
  }
}

export default ServiceCard;