import React from 'react';
import SideBar from '../components/SideBar';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <>
      <SideBar />
      <div
        className="HomeContainer"
        style={{
          paddingLeft: 0,
          marginLeft: 0,
          marginLRight: 0,
          height: '100vh',
          width: '100vh',
        }}
      >
        <Dashboard />
      </div>
    </>
  );
};

export default Home;
