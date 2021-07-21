import React from 'react';
import { NavLink } from 'react-router-dom';
import '../scss/NavBar.scss';

const NavBar = () => {
  return (
    <nav>
      <NavLink to='/news' activeClassName='active'><h2>News</h2></NavLink>
      <NavLink to='/newest' activeClassName='active'><h2>Newest</h2></NavLink>
      <NavLink to='/show' activeClassName='active'><h2>Show</h2></NavLink>
      <NavLink to='/jobs' activeClassName='active'><h2>Jobs</h2></NavLink>
    </nav>
  );
}

export default NavBar;