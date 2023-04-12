import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BarChart from '../BarChart';
import SearchBar from '../SearchBar/SearchBar';
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

  return (
    <div className="tileContainer">
      <div className="heroBanner"></div>
      <div class="tile is-parent box searchBar">
        <SearchBar />
      </div>
      <div class="tile is-parent box">
        <article class="tile is-child ">
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
            <button className="button" onClick={openModal}>
              <i class="fa fa-add" />
            </button>
            <div class="content">
              <ul>
                {site.map((siteData) => (
                  <Link to={`/sites/${siteData.id}`}>
                    <li key={siteData.id}>{siteData.name}</li>
                  </Link>
                ))}
              </ul>
            </div>
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
