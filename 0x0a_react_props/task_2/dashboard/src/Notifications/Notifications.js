import React from 'react';
import './Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';

const Notifications = () => {
  return (
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
              style={{ display: 'inline-block',
                       position: 'absolute',
                       top: '10px',
                       right: '11px',
                       margin: '1px',
                       background: 0,
                       border: 0,
                       outline: 'none' }} >
          <img src={ close } alt="" style={{ width: '6px', height: '6px' }} />
        </button>
    </div>
  )
}
export default Notifications;
