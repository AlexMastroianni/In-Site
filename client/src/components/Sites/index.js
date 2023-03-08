import React from 'react';
import DoughnutChart from '../DoughnutChart';
import AddNote from '../AddNote';
import { QUERY_ALL_USERS, GET_NOTES } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_NOTE } from '../../utils/mutations';

function Sites() {
  const { loading: isUserLoading, data: users } = useQuery(QUERY_ALL_USERS);
  const { loading: isSiteLoading, data: notes } = useQuery(GET_NOTES);
  const [deletePost, { errr }] = useMutation(DELETE_NOTE);

  const usersData = users?.users || [];
  console.log(usersData, 'User Data');
  const notesData = notes?.notes || [];

  console.log(notesData, 'Notes Data');

  const removePost = (id) => {
    deletePost({
      variables: {
        id: id,
      },
    });
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
              <b>{notesData.length} Jobs to complete</b>, Bit on
            </p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Trades</p>

            <div class="content">
              <div class="content">
                <ul>
                  {usersData.map((usersData) => (
                    <li key={usersData.username}>
                      <b>{usersData.username}</b>: {usersData.trade}
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
                {notesData.map((notesData) => (
                  <li key={notesData._id}>
                    {notesData.content} -{' '}
                    <button
                      className="button is-danger"
                      onClick={() => removePost(notesData.id)}
                    >
                      {' '}
                      Delete it{' '}
                    </button>
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
        <div>
          <AddNote />
        </div>
      </div>
    </div>
  );
}

export default Sites;
