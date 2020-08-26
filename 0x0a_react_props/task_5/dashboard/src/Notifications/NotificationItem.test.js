import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';

it('renders NotificationItem without crashing', () => {
    shallow(<NotificationItem />)
});
it('renders NotificationItem without crashing', () => {
    shallow(<NotificationItem />)
});

it(' passing dummy type and value props', () => {
    const wrap = shallow(<NotificationItem type='Success!' value='Im not included' />);
    expect(wrap.props()).toHaveProperty('data-notification-type', 'Success!');
    expect(wrap.text()).toBe('Im not included');
});

it(' passing dummy html prop', () => {
    const wrap = shallow(<NotificationItem html={{ __html: '<u>test</u>' }} />);
    expect(wrap.find('li').props()).toHaveProperty('dangerouslySetInnerHTML', { __html: '<u>test</u>' });
});
