import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

const wrapper = shallow(<App />);

it('renders without crashing', () => {
  shallow(<App />);
});
it('contains Footer', () => {
  expect(wrapper.find('Footer').exists()).toEqual(true);
});
it('contains Login', () => {
  expect(wrapper.find('Login').exists()).toEqual(true);
});
it('contains Header', () => {
  expect(wrapper.find('Header').exists()).toEqual(true);
});
it('contains Notifications', () => {
  expect(wrapper.find('Notifications').exists()).toEqual(true);
});
it('CourseList is not displayed', () => {
  const wrap = shallow(<App isLoggedIn={false}/>);
  expect(wrap.find('CourseList').exists()).toEqual(false);
});
describe('isLoggedIn is true', () => {

  it('Login component is not included', () => {
    const wrap = shallow(<App isLoggedIn={true}/>);
    expect(wrap.find('Login').exists()).toEqual(false);
  });
  
  it('CourseList component is included', () => {
    const wrap = shallow(<App isLoggedIn={true}/>);
    expect(wrap.find('CourseList').exists()).toEqual(true);
  });
})