import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav className="navigation">
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </nav>
);

export default Navigation;
