import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';
import NotificationItem from './NotificationItem';
import listNotifications from '../App/App';

const wrapper = shallow(<Notifications displayDrawer={true}/>);

it('renders Notifications without crashing', () => {
  shallow(<Notifications displayDrawer={true}/>);
});

it('renders Notifications with list-props-empty without crashing', () => {
  shallow(<Notifications listNotifications={[]} displayDrawer={true}/>);
});

it('renders Notifica tions and the length of list is correct', () => {
  const wrap = shallow(<Notifications listNotifications={listNotifications} displayDrawer={true}/>);
  expect(wrap.find('NotificationItem').length).toEqual(3);
});

it('renders NotificationItem without crashing', () => {
  shallow(<NotificationItem />);
});

it('the first NotificationItem element renders the right html', () => {
  expect(wrapper.find('NotificationItem').at(0).props()).toHaveProperty('type', 'default');
  expect(wrapper.find('NotificationItem').at(0).props()).toHaveProperty('value', 'New course available');
});

it('renders the <p>', () => {
    expect(
        wrapper.containsMatchingElement(
          <p>Here is the list of notifications</p>
        )
      ).toBeTruthy()
});

describe('displayDrawer is false', () => {
  it('div.Notifications is not being displayed', () => {
    const wrap = shallow(<Notifications displayDrawer={false}/>);
    expect(wrap.find('div.Notifications').exists()).toEqual(false);
  });

  it('menu item is being displayed', () => {
    const wrap = shallow(<Notifications displayDrawer={false}/>);
    expect(wrap.find('div.menuItem').exists()).toEqual(true);
  });
});

describe('displayDrawer is true', () => {
  it('CourseList component is included', () => {
    const wrap = shallow(<Notifications displayDrawer={true}/>);
    expect(wrap.find('div.menuItem').exists()).toEqual(true);
  });
  it('div.Notifications is being displayed', () => {
    const wrap = shallow(<Notifications displayDrawer={true}/>);
    expect(wrap.find('div.Notifications').exists()).toEqual(true);
  });
});
