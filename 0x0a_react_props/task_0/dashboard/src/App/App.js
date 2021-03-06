import React, { Fragment }  from 'react';
import './App.css';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import Notifications from '../Notifications/Notifications';

const App = () => {
  return (
    <Fragment>
     <Notifications />
     <div className="App">
       <Header />
       <hr/>
       <div className="App-body">
         <Login />
       </div>
       <hr/>
       <Footer />
     </div>
    </Fragment>
  );
}

export default App;
