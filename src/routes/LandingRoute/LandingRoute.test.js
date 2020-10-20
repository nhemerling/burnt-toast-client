import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import LandingRoute from './LandingRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <BrowserRouter>
      <LandingRoute />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});