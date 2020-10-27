import React from 'react';
import ReactDOM from 'react-dom';
import ServiceSeekForm from './ServiceSeekForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ServiceSeekForm />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});