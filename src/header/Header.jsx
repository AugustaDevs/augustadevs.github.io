import React from 'react';
import logo from '../../images/logo.png';
import './header.css';

const Header = () => (
  <div className="header-container">
    <div className="header-title">
      <img src={logo} width="50" height="50" alt="dev logo" />
      <h2>The Augusta Developer</h2>
    </div>
    <div className="header-links">
      <a className="link" href="https://github.com/AugustaDevs" target="_">
        Github
      </a>
    </div>
  </div>
);

export default Header;
