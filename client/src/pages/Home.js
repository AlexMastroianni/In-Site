import React from 'react';
import SideBar from '../components/SideBar';
import auth from '../utils/auth';
import Dashboard from './Dashboard';
import Login from './Login';

const Home = () => {
  if (auth.loggedIn()) {
    return (
      <>
        <SideBar />
        <div className="HomeContainer">
          <Dashboard />
        </div>
      </>
    );
  } else {
    return (
      <>
        <Login />
      </>
    );
  }
};

export default Home;
