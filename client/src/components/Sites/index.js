import React from 'react';
import DoughnutChart from '../DoughnutChart';
import AddNote from '../AddNote';
import { GET_ALL, QUERY_ALL_SITES, QUERY_USER } from '../../utils/queries';
import { useMutation, useQuery } from '@apollo/client';
import { DELETE_POST } from '../../utils/mutations';

function Sites() {
  // eslint-disable-next-line no-unused-vars
  const { loading, data } = useQuery(QUERY_USER, QUERY_ALL_SITES, GET_ALL);
  const [deletePost, { errr }] = useMutation(DELETE_POST);
  const sites = data?.sites || [];
  const users = data?.users || [];
  const posts = data?.getAll || [];

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
            <p class="title">Site</p>
            <div class="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                ornare magna eros, eu pellentesque tortor vestibulum ut.
                Maecenas non massa sem. Etiam finibus odio quis feugiat
                facilisis.
              </p>
            </div>
            <p class="subtitle">
              <b>{posts.length} Jobs to complete</b>, Bit on
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
                {posts.map((posts) => (
                  <li key={posts._id}>
                    {posts.content} -{' '}
                    <button
                      className="button is-danger"
                      onClick={() => removePost(posts.id)}
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
