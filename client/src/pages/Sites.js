import React from 'react';
import Sites from '../components/Sites';
import SideBar from '../components/SideBar';

function Site(props) {
  return (
    <>
      <SideBar />
      <div className="HomeContainer">
        <Sites />
      </div>
    </>
  );
}

export default Site;
