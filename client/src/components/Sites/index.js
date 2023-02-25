import React from 'react';
import DoughnutChart from '../DoughnutChart';
import AddNote from '../AddNote';
import { QUERY_USER, GET_ALL } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_POST } from '../../utils/mutations';

function Sites() {
  const { loading: isUserLoading, data: users } = useQuery(QUERY_USER);
  const { loading: isSiteLoading, data: posts } = useQuery(GET_ALL);
  const [deletePost, { errr }] = useMutation(DELETE_POST);

  const usersData = users?.users || [];
  const postsData = posts?.getAll || [];

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
              <b>{postsData.length} Jobs to complete</b>, Bit on
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
                {postsData.map((postsData) => (
                  <li key={postsData._id}>
                    {postsData.content} -{' '}
                    <button
                      className="button is-danger"
                      onClick={() => removePost(postsData.id)}
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
        <AddNote />
      </div>
    </div>
  );
}

export default Sites;
