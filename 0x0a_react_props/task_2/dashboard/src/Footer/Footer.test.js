import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const wrapper = shallow(<Footer />);

it('renders without crashing', () => {
  shallow(<Footer />);
});

it('renders the <p> at least text', () => {
  expect(wrapper.find('p').first('Copyright').exists()).toBeTruthy();
});