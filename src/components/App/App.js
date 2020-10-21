import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import PublicOnlyRoute from '../PublicOnlyRoute/PublicOnlyRoute';
import LandingRoute from '../../routes/LandingRoute/LandingRoute';
import LoginRoute from '../../routes/LoginRoute/LoginRoute';
import Chat from '../ChatMessage/Chat'
import SearchRoute from '../../routes/SearchRoute/SearchRoute';
import NotFoundRoute from '../../routes/NotFoundRoute/NotFoundRoute';
import EditProfile from '../../routes/EditProfileRoute/EditProfileRoute';
import UserServices from '../../routes/UserServiceRoute/UserServiceRoute';
import BurntToastService from '../../services/burnt-toast-api-service';
import './App.css';
import BurntToastContext from '../../contexts/BurntToastContext';

export default class App extends Component {
  static defaultProps = {
    categories: [],
    services: [],
  }

  state = {
    hasError: false,
    categories: [],
    services: [],
    searchService: '',
  };

  static getDerivedStateFromError(error) {
    console.error(error);
    return { hasError: true };
  }

  getCategoriesAndServices = () => {
    BurntToastService.getAllCategories().then(categories =>
      this.setState({
        categories
      })
    );
    BurntToastService.getAllServices().then(services =>
      this.setState({
        services
      })
    );
  }

  setSearchService = (searchService) => {
    this.setState({
      searchService
    })
  }

  render() {
    const value = {
      categories: this.state.categories,
      services: this.state.services,
      searchService: this.state.searchService,
      setSearchService: this.setSearchService,
      getCategoriesAndServices: this.getCategoriesAndServices,
    }

    const { hasError } = this.state;
    return (
      <div className='App'>
        <BurntToastContext.Provider value={value}>
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
                exact
                path={'/login'}
                component={LoginRoute}
                />
              <PrivateRoute
                exact
                path={'/profiles/:profile_id'}
                component={EditProfile}
                />
              <PrivateRoute
                path={'/profiles/:profile_id/services'}
                component={UserServices}
                />
              <PrivateRoute
                path={'/search'}
                component={SearchRoute}
              />
              <PrivateRoute
                exact
                path={'/chat'}
                component={Chat}
                />
              <Route
                component={NotFoundRoute}
              />
            </Switch>
          </main>
        </BurntToastContext.Provider>
      </div>
    );
  }
}
