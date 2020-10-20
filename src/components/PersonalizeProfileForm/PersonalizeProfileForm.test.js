import React from 'react';
import ReactDOM from 'react-dom';
import PersonalizeProfileForm from './PersonalizeProfileForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <PersonalizeProfileForm />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});