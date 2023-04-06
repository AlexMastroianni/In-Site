import React, { useState, useEffect } from 'react';
import DoughnutChart from '../DoughnutChart';
import { Link, useParams } from 'react-router-dom';
// import AddNote from '../AddNote';
import { supabase } from '../../helper/superBase';

function SinlgeSite() {
  const [site, setSite] = useState([]);
  const [post, setPosts] = useState([]);
  const [comments, setComments] = useState([]);

  const { id } = useParams();

  async function fetchSites() {
    const { data: site, error } = await supabase
      .from('profiles')
      .select('*, site(*)')
      .eq('site.id', `${id}`);
    setSite(site[0].site[0]);
  }

  // async function fetchPosts() {
  //   const { data: site, error } = await supabase
  //     .from('postes')
  //     .select('*, site(*)')
  //     .eq('site.id', `${id}`);
  //   setPosts(site);
  // }

  useEffect(() => {
    fetchSites();
    // fetchPosts();
  }, []);

  async function handleRemove() {
    const { error } = await supabase.from('site').delete('').eq('id', `${id}`);
  }

  return (
    <div className="singleSite">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">{site.name}</p>
            <div class="content"></div>
            <p class="subtitle">
              <Link reloadDocument to={'/sites'}>
                <button className="button" onClick={handleRemove}>
                  Delete Site
                </button>
              </Link>
            </p>
          </article>
        </div>

        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Trades</p>

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
      <div>
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">On the Agenda</p>
            <br></br>
            <p class="subtitle">Here is what happening</p>
            <div class="content">
              <ul>
                {/* {notesData.map((notesData) => (
                  <li key={notesData._id}>
                    {notesData.content} -{' '}
                    <button className="button is-danger"> Delete it </button>
                  </li>
                ))} */}
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
        <div>{/* <AddNote /> */}</div>
      </div>
    </div>
  );
}

export default SinlgeSite;
