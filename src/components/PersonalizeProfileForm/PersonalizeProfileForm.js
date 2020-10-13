import React, { Component } from 'react';
import { Input, Textarea, Label } from '../Form/Form';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import './PersonalizeProfileForm.css';


export class PersonalizeProfileForm extends Component {
  static contextType = UserContext;

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { } = ev.target;

    this.setState({ error: null });

   
      // .catch(res => {
      //   this.setState({ error: res.error });
      // });
  };


  render() {
    const { error } = this.state;
  
    return (
      <form
        className='PersonalizeProfileForm'
        onSubmit={this.handleSubmit}
      >
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>

        <div className='PersonalizeProfile-form-div'>
        <Input type="file" id="myFile" name="filename"/>
        <Button type='submit' className='add-userPhoto-button'>
          Add Photo
        </Button>
        </div>
        <div className='PersonalizeProfile-form-div'>
        <Label htmFor="user-bio">Your Bio:</Label>
        <br/>
        <Textarea id="user-bio" name="w3review" rows="4" cols="50">
          (optional):
        </Textarea>
        <Button type='submit' className='add-userBio-button'>
          Add Bio
        </Button>
        </div>
      </form>
    );
  }
}

export default PersonalizeProfileForm
