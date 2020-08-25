import React, { Fragment }  from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';

const App = ({ isLoggedIn }) => {
  return (
    <Fragment>
     <Notifications />
     <div className="App">
       <Header />
       <hr/>
       <div className="App-body">
         {!isLoggedIn ? <Login /> : <CourseList />}
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
