import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header-bar">
    <div className="header-inner">
      <Link className="brand" to="/">Dynamic Blog</Link>
      <nav className="nav">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/create">Create Post</Link>
      </nav>
    </div>
  </header>
);

export default Header;
