import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = ({ type, value, html }) => {
    if (html) return ( <li data-notification-type={ type } dangerouslySetInnerHTML={ html }></li> )
    else return ( <li data-notification-type={ type }>{ value }</li> )
};

NotificationItem.propTypes = {
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    html: PropTypes.objectOf({
        __html: PropTypes.string
    })
}

NotificationItem.defaultProps = {
    type: 'default'
}

export default NotificationItem;
