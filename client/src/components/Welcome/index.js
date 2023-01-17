import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../../utils/queries';
import BarChart from '../BarChart';

function Welcome() {
  const { data } = useQuery(QUERY_USER);

  let user;
  let site;

  if (data) {
    user = data.user;
  }

  return (
    <div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          {user ? (
            <p class="title">Welcome {user.username} </p>
          ) : (
            <p class="title">Welcome</p>
          )}
          <br></br>

          {site ? (
            <p class="subtitle">You have active, Smash it out</p>
          ) : (
            <p class="subtitle">You have abit to work on</p>
          )}
          <div class="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas
              non massa sem. Etiam finibus odio quis feugiat facilisis.
            </p>
          </div>
        </article>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Sites</p>
            <p class="subtitle">Map lists of sites here</p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Workload</p>

            <div class="content">
              <BarChart />
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
