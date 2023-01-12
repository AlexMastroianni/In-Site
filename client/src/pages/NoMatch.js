import React from 'react';
import Jumbotron from '../components/Jumbotron';
import { Link } from 'react-router-dom';

const NoMatch = () => {
  return (
    <div>
      <Jumbotron>
        <div className="text-center">
          <h1 class="display-1 fw-bold">404</h1>
          <p class="fs-3">
            {' '}
            <span class="text-danger">Opps!</span> Page not found.
          </p>
          <p class="lead">The page you’re looking for doesn’t exist.</p>
          <p>
            <Link to="/">
              {' '}
              <span>Go Home</span>
            </Link>
          </p>
        </div>
      </Jumbotron>
    </div>
  );
};

export default NoMatch;
