import React from 'react';
import ReactDOM from 'react-dom';
import UserServiceRoute from './UserServiceRoute';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <UserServiceRoute />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});