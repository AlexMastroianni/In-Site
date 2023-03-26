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
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          <a href="/">In Site</a>
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="fa-solid fa-house">
              <a href="/sites">Sites</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="fa fa-user">
              <a href="/users">Users</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="chart-line" iconType="solid">
              <a href="/metrics">Metrics</a>
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            className="mx-1 text-success text-decoration-none is-primary
        "
          >
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/login" onClick={() => Auth.logout()}>
              Logout
            </a>
          </div>
          <div className="sidebar-btn-wrapper" style={{ padding: '20px 5px' }}>
            @insite
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default SideBar;
