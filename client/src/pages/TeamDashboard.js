import React from 'react';
import TeamDashborder from '../components/DashBoard/TeamDashboard';
import SideBar from '../components/SideBar';

function Dashboard({ token }) {
  return (
    <>
      <SideBar />
      <div className="siteContainer">
        <TeamDashborder token={token} />
      </div>
    </>
  );
}

export default Dashboard;
