import React, { Component } from 'react';
import './ServiceCard.css'
import ServiceHolder from '../../images/service-placeholder.png';

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
          {this.props.image && <img src={this.props.image} alt="service provided image" className='service-img'/>}
          {this.props.service && <h3>{this.props.service}</h3>}
          {this.props.category && <h4>{this.props.category}</h4>}
          {this.props.type && <h5>{this.props.type}</h5>}
          {this.props.description && <p>{this.props.description}</p>}
        </div>
    );
  }
}

export default ServiceCard;