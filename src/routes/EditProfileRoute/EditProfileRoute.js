import React, { Component } from 'react';
import ServiceOfferForm from '../../components/ServiceOfferForm/ServiceOfferForm';
import ServiceSeek from '../../components/ServiceSeek/ServiceSeek';
import PersonalizeProfile from '../../components/PersonalizeProfileForm/PersonalizeProfileForm';
import BurntToastService from '../../services/burnt-toast-api-service';
import Button from '../../components/Button/Button';
import './EditProfileRoute.css'
import ProfileEditImg from '../../images/profile-edit.png'
import BurntToastContext from '../../contexts/BurntToastContext';

export class EditProfileRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  state = {
    error: null,
    provided: [],
    seeking: [],
    deleteClicked: false
  }

  state = {
    userServices: []
  }

  static contextType = BurntToastContext;

  componentDidMount() {
    this.context.getCategoriesAndServices();

    let currentUserId = this.props.match.params.profile_id;

    BurntToastService.getProfileServices(currentUserId).then(userServices => {
      let provided = [];
      let seeking = [];
      for (let i = 0; i < userServices.length; i++) {
        if (userServices[i].user_skill_type === 'PROVIDER') {
          provided.push(userServices[i]);
        } else {
          seeking.push(userServices[i]);
        }
      }
      this.setState({
        provided: [...provided],
        seeking: [...seeking]
      });
    });
  }

  handleServiceDelete = (ev) => {
    ev.preventDefault();
    this.setState({error: null})
    BurntToastService.deleteProfileService(ev.target.value)
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  handleProfileDelete = () => {
    this.setState({
      deleteClicked: true
    });
  };

  handleDeleteConfirmation = () => {
    const { history } = this.props;
    const destination = '/';
    BurntToastService.deleteProfile()
    .then(res => 
      // will need to log out and send to home
      history.push(destination)
    )
    .catch(res => {
    this.setState({ error: res.error });
     });
  };

  handleKeepAccount = () => {
    this.setState({
      deleteClicked: false
    })
  }

  renderDeleteConfirmation = () => {
    return (
      <div className='delete-confirmation'>
        <p>You will not be able to recover your profile after deleting.</p>
        <p style={{ fontWeight: 'bold' }}>PLEASE CONFIRM YOUR DELETE REQUEST</p>
        <Button type='button' className='delete-button-keep' onClick={this.handleKeepAccount}>Keep account</Button>
        <br />
        <Button type='button' className='delete-button' onClick={this.handleDeleteConfirmation}>Confirm Delete</Button>
      </div>
    );
  };

  render() {
    let serviceOffer = this.state.provided ? this.state.provided : [];
    let serviceSeek = this.state.seeking ? this.state.seeking : [];

    let offers = serviceOffer.map((offer, i) => (
      <div key={i} className='user-card-item'>
        <div>
          <h3>{offer.skill_name}</h3>
          <p>{offer.primary_description}</p>
        </div>
        <Button type='button' className='delete-service-item' value={offer.id} onClick={this.handleServiceDelete}>remove</Button>
      </div>))

    let seeks = serviceSeek.map((seek, i) => (
      <div key={i} className='user-card-item'>
        <div>
          <h3>{seek.skill_name}</h3>
        </div>
        <Button type='button' className='delete-service-item' value={seek.id} onClick={this.handleServiceDelete}>remove</Button>
      </div>))

    let deleteButton = this.state.deleteClicked
      ? this.renderDeleteConfirmation()
      : (<Button type='button' className='delete-button' onClick={this.handleProfileDelete}> Delete Profile </Button>);

    return (
      <div>
        <h1> Manage Profile</h1>
        <img src={ProfileEditImg} className='manage-profile-img' alt=''></img>
        <section>
          <div className='user-service-card-display'>
            <section className='service-provided'>
              <h2>Services You're Providing</h2>
              {offers}
            </section>
            <section className='service-seeking'>
              <h2>Services You're Seeking</h2>
              {seeks}
            </section>
          </div>
        </section>
        <section>
          <ServiceOfferForm />
        </section>
        <section>
          <ServiceSeek />
        </section>
        <section>
          <PersonalizeProfile />
        </section>
        <section className='user-delete-profile'>
          <h2>Danger Zone</h2>
          <p>Deleting profile will remove you from our records permanently.</p>
          {/* <Button 
          type='button'
          onClick={this.handleDeleteClick}
          >
            Delete Profile
          </Button> */}

          {deleteButton}
        </section>
      </div>
    )
  }
}

export default EditProfileRoute
