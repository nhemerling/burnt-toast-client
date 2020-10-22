import React, { Component } from 'react';
import './ServiceCard.css'
import ArtClasses from '../../images/Categories/Art/art-classes.jpg';
import ArtCommission from '../../images/Categories/Art/art-commission.jpg';
import BumperRepair from '../../images/Categories/Automotive/bumper-repair.jpg';
import CarPainting from '../../images/Categories/Automotive/car-painting.jpg';
import MaintenanceTraining from '../../images/Categories/Automotive/maintenance-training.jpg';
import RideShare from '../../images/Categories/Automotive/ride-share.jpg';
import Tires from '../../images/Categories/Automotive/tires.jpg';
import HomemadeMakeup from '../../images/Categories/Beauty/homemade-makeup.jpg';
import Makeup from '../../images/Categories/Beauty/makeup.jpg';
import SkinCare from '../../images/Categories/Beauty/skincare.jpg';
import HardwareFix from '../../images/Categories/Computers/hardware-fix.jpg';
import SoftwareSetup from '../../images/Categories/Computers/software-setup.jpg';
import WebDesign from '../../images/Categories/Computers/web-design.jpg';
import WebDevelopment from '../../images/Categories/Computers/web-development.jpg';
import LanguageLearning from '../../images/Categories/Education/language-learning.jpg';
import Tutorials from '../../images/Categories/Education/tutorials.jpg';
import Tutoring from '../../images/Categories/Education/tutoring.jpg';
import HowTo from '../../images/Categories/Electronics/how-to.jpg';
import QuickFix from '../../images/Categories/Electronics/quick-fix.jpg';
import Diet from '../../images/Categories/Food/diet.jpg';
import HomeCook from '../../images/Categories/Food/home-cook.jpg';
import MealPrep from '../../images/Categories/Food/meal-prep.jpg';
import Produce from '../../images/Categories/Food/produce.jpg';
import Blacksmith from '../../images/Categories/Handmade/blacksmith.jpg';
import Knitting from '../../images/Categories/Handmade/knitting.jpg';
import Leather from '../../images/Categories/Handmade/leather.jpg';
import Woodworking from '../../images/Categories/Handmade/woodworking.jpg';
import Exercise from '../../images/Categories/Health/exercise.jpg';
import Healing from '../../images/Categories/Health/healing.jpg';
import Hugs from '../../images/Categories/Health/hugs.jpg';
import SoundBaths from '../../images/Categories/Health/sound-baths.jpg';
import Weightlifting from '../../images/Categories/Health/weightlifting.jpg';
import Decor from '../../images/Categories/Home/decor.jpg';
import Painting from '../../images/Categories/Home/painting.jpg';
import Repair from '../../images/Categories/Home/repair.jpg';
import Roofing from '../../images/Categories/Home/roofing.jpg';
import ActiveListening from '../../images/Categories/Other/active-listening.jpg';
import DancePartner from '../../images/Categories/Other/dance-partner.jpg';
import PlusOne from '../../images/Categories/Other/plus-one.jpg';
import Computer from '../../images/Categories/Repair/computer.jpg';
import Fences from '../../images/Categories/Repair/fences.jpg';
import Hearts from '../../images/Categories/Repair/hearts.jpg';
import ImprovingForm from '../../images/Categories/Sports/improving-form.jpg';
import ImprovingScore from '../../images/Categories/Sports/improving-score.jpg';
import Team from '../../images/Categories/Sports/team.jpg';

const serviceImages = {
  ArtClasses,
  ArtCommission,
  BumperRepair,
  CarPainting,
  MaintenanceTraining,
  RideShare,
  Tires,
  HomemadeMakeup,
  Makeup,
  SkinCare,
  HardwareFix,
  SoftwareSetup,
  WebDesign,
  WebDevelopment,
  LanguageLearning,
  Tutorials,
  Tutoring,
  HowTo,
  QuickFix,
  Diet,
  HomeCook,
  MealPrep,
  Produce,
  Blacksmith,
  Knitting,
  Leather,
  Woodworking,
  Exercise,
  Healing,
  Hugs,
  SoundBaths,
  Weightlifting,
  Decor,
  Painting,
  Repair,
  Roofing,
  ActiveListening,
  DancePartner,
  PlusOne,
  Computer,
  Fences,
  Hearts,
  ImprovingForm,
  ImprovingScore,
  Team
};

class ServiceCard extends Component {

  matchServiceImage(serviceName) {
    const serviceWithoutSpace = serviceName.split(' ').join('');
    return serviceImages[serviceWithoutSpace]
  }

  render() {
    const serviceImage = this.matchServiceImage(this.props.service);
    return(
        <div className="service-card" >
          <img src={serviceImage} alt={this.props.service} className='service-img'/>
          {this.props.service && <h3>{this.props.service}</h3>}
          {this.props.category && <h4>{this.props.category}</h4>}
          {this.props.type && <h5>{this.props.type}</h5>}
          {this.props.description && <p>{this.props.description}</p>}
        </div>
    );
  }
}

export default ServiceCard;