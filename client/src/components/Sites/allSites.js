import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../helper/superBase';
import AddSiteModal from '../AddSiteModal/addSiteModal';

function AllSites({ token }) {
  const [site, setSite] = useState([]);
  console.log(token, 'token from dashboard View');

  async function fetchSites() {
    const { data: site, error } = await supabase
      .from('profiles')
      .select('*, site(*)');
    console.log(site, 'data from supabase');
    console.log(error, 'error from supabase');
    setSite(site[0].site);
  }

  useEffect(() => {
    fetchSites();
  }, []);

  const [modalVisible, setModalVisible] = useState(false);

  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
    fetchSites();
  }

  console.log('unfiltered site data', site);
  console.log('filtered site data', site);
  return (
    <div className="sites">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Sites</p>
            <button className="button" onClick={openModal}>
              <i class="fa fa-add" />
            </button>
            <div class="content"></div>
            <p class="subtitle">
              {site.map((siteData) => (
                <Link to={`${siteData.id}`}>
                  <li key={siteData.id}>{siteData.name}</li>
                </Link>
              ))}
            </p>
          </article>
          <AddSiteModal
            openModal={openModal}
            closeModal={closeModal}
            modalVisible={modalVisible}
            token={token}
          />
        </div>
      </div>
    </div>
  );
}

export default AllSites;
