import React, { Component } from 'react';
import BurntToastService from '../services/burnt-toast-api-service'

const BurntToastContext = React.createContext({
    categories: [],
    services: [],
});

export default BurntToastContext;

export class BurntToastProvider extends Component {
  state = {
    categories: [],
    services: [],
  }

  componentDidMount() {
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

  render() {
    const value = {
      categories: this.state.categories,
      services: this.state.services,
    }
    return (
      <BurntToastContext.Provider value={value}>
        {this.props.children}
      </BurntToastContext.Provider>
    );
  }
}