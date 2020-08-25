import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

it('isHeader is true and no textSecondCell ', () => {
    const wrap = shallow(<CourseListRow isHeader={true} textFirstCell="hello"  />);
    expect(wrap.find('th').props()).toHaveProperty('colSpan', '2');
    expect(wrap.find('th').text()).toBe('hello');
});

it('isHeader is true', () => {
    const wrap = shallow(<CourseListRow isHeader={true} textFirstCell="hello" textSecondCell="world" />);
    expect(wrap.find('th').length).toEqual(2);
    expect(wrap.find('th').first().text()).toBe('hello');
});

it('isHead is false', () => {
    const wrap = shallow(<CourseListRow textFirstCell="hello" textSecondCell="world" />);
    expect(wrap.find('td').length).toEqual(2);
    expect(wrap.find('td').first().text()).toBe('hello');
});
