
import React from 'react';
import './Dashboard.css'


const Dashboard: React.FC = (): JSX.Element => {
  return (
    <div>
      <div className="sidenav">
        <h1 className="sidebar_title">Sidebar</h1>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="main_content">
        <span className="dashboard_title">Dashboard</span>
        <span className="dashboard_title2">Logout</span>
      </div>
      <h1>WelCome to Our Dashboard Page</h1>
      <div className="Footer_content">
        <span className="footer_title">Footer</span>

      </div>
    </div>
  );
}

export default Dashboard;