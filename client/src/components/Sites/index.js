import React from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import DoughnutChart from '../DoughnutChart';
import {
  QUERY_ALL_SITES,
  QUERY_USER,
  QUERY_ALL_NOTES,
} from '../../utils/queries';
import { REMOVE_NOTE } from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { idbPromise } from '../../utils/helpers';

const Sites = ({ item }) => {
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(
    QUERY_USER,
    QUERY_ALL_SITES,
    QUERY_ALL_NOTES
  );
  const sites = data?.sites || [];
  const users = data?.users || [];
  const notes = data?.notes || [];

  const [, dispatch] = useStoreContext();

  const removeNote = (item) => {
    dispatch({
      type: REMOVE_NOTE,
      _id: item._id,
    });
    idbPromise('note', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
    if (value === '0') {
      dispatch({
        type: REMOVE_NOTE,
        _id: item._id,
      });
      idbPromise('note', 'delete', { ...item });
    }
    console.log(e);
  };
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
                    <li key={users.username}>
                      <b>{users.username}</b>: {users.trade}
                    </li>
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
                  <li key={notes._id}>
                    - {notes.content}{' '}
                    <span
                      onChange={onChange}
                      role="img"
                      aria-label="trash"
                      onClick={() => removeNote(item)}
                    >
                      🗑️
                    </span>
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
};

export default Sites;
