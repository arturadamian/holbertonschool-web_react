import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import './Notifications.css';
import close from '../assets/close-icon.png';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';

const Notifications = ({ displayDrawer, listNotifications }) => {
  return (
    <Fragment>
      <div className="Notification-box">
        <div className="menuItem">Your notifications</div>
          { displayDrawer && (
            <div className="Notifications">
             { listNotifications && listNotifications.length ? (
              <Fragment>
              <p>Here is the list of notifications</p>
              <ul>
                {listNotifications.map(({id, html, type, value}) => (
                    <NotificationItem key={id} html={html} type={type} value={value} />
                ))}
              </ul>
              </Fragment>
              ) : (<p>No new notifications for now</p>)
              }
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

Notifications.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
}

export default Notifications;
