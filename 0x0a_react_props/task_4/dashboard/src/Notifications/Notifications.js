import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = ({ displayDrawer }) => {
  return (
    <Fragment>
      <div className="Notification-box">
        <div className="menuItem">Your notifications</div>
          { displayDrawer && (
            <div className="Notifications">
              <p>Here is the list of notifications</p>
              <ul>
              <NotificationItem type="default" value='New course available' />
              <NotificationItem type="urgent" value='New resume available' />
              <NotificationItem type="urgent" value='hello' html={{ __html: getLatestNotification() }} />
              </ul>
              <button type='button' 
                      aria-label='Close'
                      onClick={() => console.log('Close button has been clicked')}
                      style={{ 
                              position: 'absolute',
                              top: '13px',
                              right: 0,
                              margin: '1px',
                              background: 0,
                              border: 0,
                              outline: 'none' }} >
                  <img src={ close } alt="" style={{ width: '6px', height: '6px' }} />
                </button>
            </div>
          )}
        </div>
    </Fragment>
  )
}
Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
}

Notifications.defaultProps = {
  displayDrawer: false
}

export default Notifications;
