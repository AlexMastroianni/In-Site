import React from 'react';
import SingleSite from '../components/Sites/singleSite';
import SideBar from '../components/SideBar';

function SingleSitePage({ token }) {
  return (
    <>
      <SideBar />
      <div className="siteContainer">
        <SingleSite token={token} />
      </div>
    </>
  );
}

export default SingleSitePage;
