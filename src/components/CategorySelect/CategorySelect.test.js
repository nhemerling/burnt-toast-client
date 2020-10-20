import React from 'react';
import ReactDOM from 'react-dom';
import CategorySelect from './CategorySelect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <CategorySelect />,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});