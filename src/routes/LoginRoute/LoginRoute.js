import React, { Component } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

class LoginRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  };

  handleLoginSuccess = () => {
    const { history } = this.props;
    const destination = '/search';
    history.push(destination);
  };

  render() {
    return (
      <section>
        <h2 className='hidden'>Login</h2>
        <LoginForm
          onLoginSuccess={this.handleLoginSuccess}
        />
      </section>
    );
  }
}

export default LoginRoute;
