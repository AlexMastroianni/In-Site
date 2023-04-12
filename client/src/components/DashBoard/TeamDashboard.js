import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BarChart from '../BarChart';
import SearchBar from '../SearchBar/SearchBar';
import AddSiteModal from '../AddSiteModal/addSiteModal';
import { supabase } from '../../helper/superBase';

function TeamDashboard({ token }) {
  return (
    <div className="singleSiteContainer">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <div class="content">Company Name</div>
            <p class="subtitle">Your Org</p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <h3 class="">Trades</h3>

            <div class="content">
              <div class="content">
                <ul>
                  {/* {usersData.map((usersData) => (
                    <li key={usersData.username}>
                      <b>{usersData.username}</b>: {usersData.trade}
                    </li>
                  ))} */}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Team</p>
            <div class="userCardContainer">
              <div className="userCard">
                <p>user 1</p>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div></div>
      <div>{/* <AddNote /> */}</div>
    </div>
  );
}

export default TeamDashboard;
