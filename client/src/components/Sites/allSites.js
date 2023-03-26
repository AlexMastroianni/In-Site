import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { supabase } from '../../helper/superBase';

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

  console.log('unfiltered site data', site);
  console.log('filtered site data', site);
  return (
    <div className="sites">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <p class="title">Sites</p>
            <div class="content"></div>
            <p class="subtitle">
              {site.map((siteData) => (
                <Link to={`${siteData.id}`}>
                  <li key={siteData.id}>{siteData.name}</li>
                </Link>
              ))}
            </p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default AllSites;
