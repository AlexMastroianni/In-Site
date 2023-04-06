import React from 'react';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from 'cdbreact';
import Auth from '../../utils/auth';

<i class="fa-thin fa-house"></i>;

const SideBar = () => {
  return (
    <div className="sidebar">
      <CDBSidebar
        className="side"
        style={{ backgroundColor: 'ghostwhite', color: 'black' }}
      >
        <CDBSidebarHeader>
          <a href="/">In Site</a>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu className="sidebarItems">
            <CDBSidebarMenuItem icon="fa-solid fa-home">
              <a className="textItem" href="/">
                Home
              </a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fa-solid fa-building">
              <a className="textItem" href="/sites">
                Sites
              </a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fa fa-user">
              <a className="textItem" href="/users">
                Team
              </a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              <a className="textItem" href="/metrics">
                Metrics
              </a>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/login" onClick={() => Auth.logout()}>
            Logout
          </a>

          <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
            @insite
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
