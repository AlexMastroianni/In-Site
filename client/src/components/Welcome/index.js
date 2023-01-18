import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ALL_SITES, QUERY_USER } from '../../utils/queries';
import BarChart from '../BarChart';

function Welcome() {
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(QUERY_USER, QUERY_ALL_SITES);

  const user = data?.user || [];
  const sites = data?.sites || [];

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

          {sites ? (
            <p class="subtitle">You have {sites.length} sites active</p>
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
            <div class="content">
              <ul>
                {sites.map((sites) => (
                  <li key={sites.id}>{sites.name}</li>
                ))}
              </ul>
            </div>
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
