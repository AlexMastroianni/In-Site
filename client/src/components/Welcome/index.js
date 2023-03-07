import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SITES, QUERY_USER } from '../../utils/queries';
import BarChart from '../BarChart';

function Welcome() {
  const { loading: isUserLoading, data: user } = useQuery(QUERY_USER);
  const { loading: isSiteLoading, data: sites } = useQuery(QUERY_SITES);

  const userData = user?.users || [];
  const siteData = sites?.sites || [];
  console.log(siteData, 'site');
  console.log(userData, 'user');

  return (
    <div>
      <div class="tile is-parent">
        <article class="tile is-child box">
          {user ? (
            <p class="title">Welcome {userData.username} </p>
          ) : (
            <p class="title">Welcome</p>
          )}
          <br></br>

          {sites ? (
            <p class="subtitle">You have {siteData.length} sites active</p>
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
                {siteData.map((siteData) => (
                  <li key={siteData.id}>{siteData.name}</li>
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
