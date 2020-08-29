import React, { Fragment }  from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import { getLatestNotification } from '../utils/utils';

export const listCourses = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
]
export const listNotifications = [
  { id: 1, type: 'default', value: 'New course available'},
  { id: 2, type: 'urgent', value: 'New resume available'},
  { id: 3, type: 'urgent', html: { __html: getLatestNotification() }}
]

const App = ({ isLoggedIn }) => {
  return (
    <Fragment>
     <Notifications listNotifications={listNotifications} />
     <div className='App'>
       <Header />
       <hr/>
       <div className='App-body'>
         {!isLoggedIn ? <Login /> : <CourseList listCourses={listCourses} />}
       </div>
       <hr/>
       <Footer />
     </div>
    </Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
}

export default App;
