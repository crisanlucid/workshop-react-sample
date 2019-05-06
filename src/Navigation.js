import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to='/home' className='btn' activeClassName='active'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/contact' className='btn' activeClassName='active'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
