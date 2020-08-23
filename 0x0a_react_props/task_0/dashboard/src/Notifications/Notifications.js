import React from 'react';
import '../Notifications/Notifications.css';
import close from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js';

const Notifications = () => {
  return (
    <div className="Notifications">
      <p>Here is the list of notifications</p>
      <ul>
        <li data-priority='default'>New course available</li>
        <li data-priority='urgent'>New resume available</li>
        <li data-priority='urgent'><div dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}`}}></div></li>
      </ul>
      <button type='button' 
        aria-label='Close' onClick={() => console.log('Close button has been clicked')}
        style={{ display: 'inline-block', position: 'absolute', top: '10px', right: '11px', margin: '1px', background: 0, border: 0, outline: 'none' }} >
          <img src={ close } alt="" style={{ width: '6px', height: '6px', }} />
        </button>
    </div>
  )
}
export default Notifications;
