import React from 'react';
import Sites from '../components/Sites';
import SideBar from '../components/SideBar';

function Site(props) {
  return (
    <container className="dashboard">
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
          <Sites />
        </div>
      </>
    </container>
  );
}

export default Site;
