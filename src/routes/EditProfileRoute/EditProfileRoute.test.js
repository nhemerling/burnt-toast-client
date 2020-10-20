import React from 'react';
import ReactDOM from 'react-dom';
import EditProfileRoute from './EditProfileRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <EditProfileRoute />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});