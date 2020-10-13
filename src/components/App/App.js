import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LandingRoute from '../../routes/LandingRoute/LandingRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import EditProfile from '../../routes/EditProfileRoute/EditProfileRoute';
import './App.css';

export default class App extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    return (
      <div className='App'>
        <Header />
        <main>
          {hasError && (
            <p className='error'>There was an error! Oh no!</p>
          )}
          <Switch>
            <PublicOnlyRoute
              exact
              path={'/'}
              component={LandingRoute}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginRoute}
            />
            <Route 
            //Double check route
              path={'/profiles/:profile_id'}
              component={EditProfile}
            />
            <Route
              component={NotFoundRoute}
            />
          </Switch>
        </main>
      </div>
    );
  }
}
