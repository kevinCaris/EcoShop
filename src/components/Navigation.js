import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <ul className="navbar-nav mx-auto text-black ">
        <li className="nav-item active">
            <NavLink  to="/" className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')}>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} to="/shop">Shop</NavLink>
        </li>
        <li className="nav-item">
            <NavLink className={({ isActive }) => (isActive ? 'nav-link active-link' : 'nav-link')} to="/contact">Contact</NavLink>
        </li>
    </ul>
  );
}

export default Navigation;
