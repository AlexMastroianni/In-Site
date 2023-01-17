import React from 'react';
import DoughnutChart from '../DoughnutChart';
import {
  QUERY_ALL_SITES,
  QUERY_USER,
  QUERY_ALL_NOTES,
} from '../../utils/queries';
import { useQuery } from '@apollo/client';

function Sites() {
  const { loading, data } = useQuery(
    QUERY_USER,
    QUERY_ALL_SITES,
    QUERY_ALL_NOTES
  );
  const sites = data?.sites || [];
  const users = data?.users || [];
  const notes = data?.notes || [];

  return (
    <div className="sites">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Sites</p>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
            <p class="subtitle">
              <b>{sites.length} Sites Running</b>, Bit on
            </p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Trades</p>

            <div class="content">
              <div class="content">
                <ul>
                  {users.map((users) => (
                    <li key={users.id}>{users.trade}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">On the Agenda</p>
            <br></br>
            <p class="subtitle">Here is what happening</p>
            <div class="content">
              <ul>
                {notes.map((notes) => (
                  <li key={notes.id}>
                    {notes.author}:{notes.content}
                  </li>
                ))}
              </ul>
            </div>
          </article>
          <article class="tile is-child box">
            <p class="title">Where You are At</p>
            <br></br>
            <p class="subtitle">Here is what happening</p>
            <div class="content">
              <DoughnutChart />
            </div>
          </article>
        </div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Whats Next?</p>
            <br></br>
            <p class="subtitle">Put the next job in here!</p>
            <div class="content">
              <input
                class="input is-rounded "
                type="text"
                placeholder="Rounded input"
              ></input>
              <div class="field is-grouped p-4">
                <p class="control">
                  <button class="button is-link">Save changes</button>
                </p>
                <p class="control">
                  <button class="button">Cancel</button>
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Sites;
