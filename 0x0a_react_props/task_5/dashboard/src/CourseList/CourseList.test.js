import React from 'react';
import { shallow } from 'enzyme';
import CourseList from './CourseList';

it('rensders without crashing ', () => {
    shallow(<CourseList />);
});

it('renders the 5 different rows', () => {
    const wrap = shallow(<CourseList />);
    expect(wrap.find('CourseListRow').length).toEqual(3);
});
