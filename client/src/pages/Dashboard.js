import React from 'react';
import UserDashborder from '../components/DashBoard/userDashboard';

function Dashboard({ token }) {
  return (
    <div className="dashboard">
      <UserDashborder token={token} />
    </div>
  );
}

export default Dashboard;
