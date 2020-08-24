import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';

const wrapper = shallow(<Notifications />);

it('renders Notifications without crashing', () => {
  shallow(<Notifications />);
});
it('renders NotificationItem without crashing', () => {
  shallow(<NotificationItem />);
});
it('the first NotificationItem element renders the right html', () => {
  expect(wrapper.find('NotificationItem').at(0).prop('type')).toEqual('default');
  expect(wrapper.find('NotificationItem').at(0).prop('value')).toEqual('New course available');
});
it('renders the <p>', () => {
    expect(
        wrapper.containsMatchingElement(
          <p>Here is the list of notifications</p>
        )
      ).toBeTruthy()
});
