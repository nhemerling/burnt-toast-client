import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Input, Required, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import Button from '../Button/Button';
import './LandingForm.css'

class LandingForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => { }
  };

  state = { error: null };

  firstInput = React.createRef();

  handleSubmit = ev => {
    ev.preventDefault();
    const { fullname, username, password, email, zipcode } = ev.target;
    AuthApiService.postUser({
      full_name: fullname.value,
      username: username.value,
      password: password.value,
      email: email.value,
      zip: zipcode.value,
    })
      .then(user => {
        // TODO: THESE VALUES ARE undefined AND CRASH PROGRAM. NEED TO SEE IF ANYTHING ELSE BREAKS BEFORE REMOVING THEM COMPLETELY
        // name.value = '';
        // username.value = '';
        // password.value = '';
        this.props.onRegistrationSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form
        onSubmit={this.handleSubmit}
        id='register-Form'
      >
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div className='form-div'>
          <Label htmlFor='registration-fullname-input' className='hidden'>
            Your full name<Required />
          </Label>
          <Input
            id='registration-fullname-input'
            name='fullname'
            placeholder='fullname'
            maxLength='30'
            required
          />
        </div>
        <div className='form-div'>
          <Label htmlFor='registration-username-input' className='hidden'>
            Choose a username<Required />
          </Label>
          <Input
            id='registration-username-input'
            name='username'
            placeholder='username'
            maxLength='10'
            required
          />
        </div>
        <div className='form-div'>
          <Label htmlFor='registration-password-input' className='hidden'>
            Choose a password<Required />
          </Label>
          <Input
            id='registration-password-input'
            name='password'
            type='password'
            placeholder='password'
            required
          />
        </div>
        <div className='form-div'>
          <Label htmlFor='registration-email-input' className='hidden'>
            Your email<Required />
          </Label>
          <Input
            id='registration-email-input'
            name='email'
            type='email'
            placeholder='email'
            required
          />
        </div>
        <div className='form-div'>
          <Label htmlFor='registration-zipcode-input' className='hidden'>
            Your Zip Code
          </Label>
          <Input
            id='registration-zipcode-input'
            name='zipcode'
            type='numeric'
            pattern="^\d{5}(?:[-\s]\d{4})?$
            "
            placeholder='zipcode'
            maxLength='5'
          />
        </div>
        <footer>
          <Button type='submit' className='registration-button'>
            Sign up
          </Button>
          <br/>
          <br/>
          {' '}
          <Link to='/login' className='login-redirect'>Already have an account?</Link>
        </footer>
      </form>
    );
  }
}

export default LandingForm;
