import React from 'react';
import ReactDOM from 'react-dom';
import ServiceSeek from './ServiceSeek';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <ServiceSeek />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});