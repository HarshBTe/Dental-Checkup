import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav
      style={{
        backgroundColor: '#007bff',
        padding: '15px 30px',
        display: 'flex',
        justifyContent: 'center',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
      }}
    >
      <ul
        style={{
          listStyle: 'none',
          display: 'flex',
          gap: '20px',
          margin: 0,
          padding: 0,
        }}
      >
        <li>
          <Link
            to="/login"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            Register
          </Link>
        </li>
        <li>
          <Link
            to="/dentists"
            style={{
              color: 'white',
              textDecoration: 'none',
              fontSize: '16px',
            }}
          >
            Dentists
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
