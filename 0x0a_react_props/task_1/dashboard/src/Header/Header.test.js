import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const wrapper = shallow(<Header />);

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders the <h1>', () => {
    expect(
        wrapper.containsMatchingElement(
          <h1>School dashboard</h1>
        )
      ).toBeTruthy()
});
  
it('renders image', () => {
  expect(wrapper.find('img').exists()).toEqual(true);
});
