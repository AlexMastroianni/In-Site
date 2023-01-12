import React from 'react';
import Auth from '../../utils/auth';
import { Link } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard';

function Nav() {
  function showNavigation() {
    return (
      <ul className="flex-row">
        <li className="mx-1">
          <Link to="/orderHistory">Order History</Link>
        </li>
        <li className="mx-1">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
            Logout
          </a>
        </li>
      </ul>
    );
    // } else {
    //   return (
    //     <ul className="flex-row">
    //       <li className="mx-1">
    //         <Link to="/signup">Sign Up</Link>
    //       </li>
    //       <li className="mx-1">
    //         <Link to="/login">Login</Link>
    //       </li>
    //     </ul>
    //   );
    // }
  }

  return (
    <header className="flex px-1">
      <h2>
        <Link to="/">
          <span role="img" aria-label=""></span>
          Dashboard
        </Link>
      </h2>

      <nav>{showNavigation()}</nav>
      <Dashboard />
    </header>
  );
}

export default Nav;
