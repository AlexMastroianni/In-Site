import React from 'react';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <>
      <SideBar />
      <div className="HomeContainer">
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
