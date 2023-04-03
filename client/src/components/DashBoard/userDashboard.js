import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BarChart from '../BarChart';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import AddSiteModal from '../AddSiteModal/addSiteModal';
import { supabase } from '../../helper/superBase';

function UserDashborder({ token }) {
  const [site, setSite] = useState([]);
  console.log(token, 'token from dashboard View');
  console.log(token.user.id);

  async function fetchSites() {
    const { data: site, error } = await supabase
      .from('profiles')
      .select('*, site(*)')
      .eq('site.user_id', `${token.user.id}`);

    console.log(site, 'data from supabase');
    console.log(error, 'error from supabase');
    setSite(site[0].site);
  }

  useEffect(() => {
    fetchSites();
    console.log('data site fetched');
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    fetchSites();
  }

  // console.log('unfiltered site data', site);
  // console.log('filtered site data', site);

  return (
    <div>
      <div class="tile is-parent">
        <article class="tile is-child box pt-5 mt-5">
          {token ? (
            <p class="title">Welcome {token.user.user_metadata.username} </p>
          ) : (
            <p class="title">Welcome</p>
          )}
          <br></br>

          {site ? (
            <p class="subtitle">You have {site.length} sites active</p>
          ) : (
            <p class="subtitle">You have abit to work on</p>
          )}
          <div class="content">
            <p>Here is what happened while you were away</p>
          </div>
        </article>
      </div>
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Active Sites</p>

            <div class="content">
              <ul>
                {site.map((siteData) => (
                  <Link to={`/sites/${siteData.id}`}>
                    <li key={siteData.id}>{siteData.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <span className="button" onClick={openModal}>
              add a site
            </span>
          </article>
          <AddSiteModal
            openModal={openModal}
            closeModal={closeModal}
            modalVisible={modalVisible}
            token={token}
          />
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

export default UserDashborder;
