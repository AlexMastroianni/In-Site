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

const SideBar = () => {
  return (
    <div className="sidebar">
      <CDBSidebar>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          In Site
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <CDBSidebarMenuItem icon="th-large">
              <a href="/sites">Sites</a>
            </CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="sticky-note">Users</CDBSidebarMenuItem>
            <CDBSidebarMenuItem icon="credit-card" iconType="solid">
              Metrics
            </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div className="mx-1 text-success text-decoration-none">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
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
