import React from 'react';
import ReactDOM from 'react-dom';
import ServiceOfferForm from './ServiceOfferForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ServiceOfferForm />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});