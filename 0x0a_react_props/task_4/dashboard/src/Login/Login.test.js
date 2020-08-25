import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';

const wrapper = shallow(<Login />);

it('renders without crashing', () => {
  shallow(<Login />);
});

it('renders three list items', () => {
  expect(wrapper.find('div.App-login').children('input').length).toEqual(2);
});

it('renders three list items', () => {
  expect(wrapper.find('div.App-login').children('label').length).toEqual(2);
});
