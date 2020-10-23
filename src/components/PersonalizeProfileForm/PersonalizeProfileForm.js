import React, { Component } from 'react';
import { Input, Textarea, Label } from '../Form/Form';
import UserContext from '../../contexts/UserContext';
import BurntToastService from '../../services/burnt-toast-api-service';
import Button from '../Button/Button';
import './PersonalizeProfileForm.css';


export class PersonalizeProfileForm extends Component {
  static contextType = UserContext;

  // state = {
  //   success: null,
  //   error: null,
  // };

  // handleSubmit = ev => {
  //   ev.preventDefault();
  //   console.log('this works')

  //   this.setState({
  //     error: null
  //   })

  //   let userbio = {
  //     profile_desc: ev.target.bio.value
  //   };


  //   BurntToastService.updateProfile(userbio)
  //   .then(res => {
  //     console.log(res)
  //     this.setState({
  //       success: "Updated Bio Successfully"
  //     })

  //     setTimeout(() => {
  //       this.setState({
  //         success: false
  //       })
  //     }, 4000)
  //   })
  //     .catch(res => {
  //      this.setState({ error: res.error });
  //     });
  // };

  render() {
    const { error, success} = this.props;
    const { bio } = this.props;

    return (
      <form
        className='PersonalizeProfileForm'
        onSubmit={(ev) => this.props.handleSubmitEditBio(ev)}
      >
          <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
          {success && <p className='success'>{success}</p>}
        </div>
        <h3>Personalize Profile Form</h3>
        <div className='PersonalizeProfile-form-div'>
        <Label htmlFor="user-bio">Your Bio:</Label>
        <br/>
        <Textarea
        id="user-bio"
        name="bio"
        rows="4"
        cols="50"
        placeholder='(optional)'
        maxLength='300'
        value={bio}
        onChange={(ev) => this.props.handleEditBio(ev.target.value)}
        >
        </Textarea>
        <Button type='submit' className='add-userBio-button'>
          Change Bio
        </Button>
        </div>
      </form>
    );
  }
}

export default PersonalizeProfileForm
