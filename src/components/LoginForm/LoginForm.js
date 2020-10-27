import React, { Component } from 'react';
import { Input, Label } from '../Form/Form';
import AuthApiService from '../../services/auth-api-service';
import UserContext from '../../contexts/UserContext';
import Button from '../Button/Button';
import LoginIcon from '../../images/userLogin.png'
import './LoginForm.css'

class LoginForm extends Component {
  static defaultProps = {
    onLoginSuccess: () => { }
  };

  static contextType = UserContext;

  state = { error: null };

  handleSubmit = ev => {
    ev.preventDefault();
    const { username, password } = ev.target;

    this.setState({ error: null });

    AuthApiService.postLogin({
      username: username.value,
      password: password.value,
    })
      .then(res => {
        username.value = '';
        password.value = '';
        this.context.processLogin(res.authToken);
        this.props.onLoginSuccess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { error } = this.state;
    return (
      <form
        className='LoginForm'
        onSubmit={this.handleSubmit}
      >
        <img className='login-Icon' src={LoginIcon} alt=""></img>
        <div className='form-div' role='alert'>
          {error && <p className='error'>{error}</p>}
        </div>
        <div className='form-div'>
          <Label htmlFor='login-username-input' className='hidden'>
            Username
          </Label>
          <Input
            id='login-username-input'
            name='username'
            placeholder='username'
            required
          />
        </div>
        <div className='form-div'>
          <Label htmlFor='login-password-input' className='hidden'>
            Password
          </Label>
          <Input
            id='login-password-input'
            name='password'
            type='password'
            placeholder='password'
            required
          />
        </div>
        <Button type='submit' className='login-button'>
          Login
        </Button>
      </form>
    );
  }
}

export default LoginForm;
