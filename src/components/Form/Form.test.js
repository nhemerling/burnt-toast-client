import React from 'react';
import ReactDOM from 'react-dom';
import { Label, Input, Required, Textarea } from './Form';

describe('Form components', () => {
  it('renders Label without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Label />,
      div
      );
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Input without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Input />,
      div
      );
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Required without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Required />,
      div
      );
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders Textarea without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Textarea />,
      div
      );
      ReactDOM.unmountComponentAtNode(div);
  });
});