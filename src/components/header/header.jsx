import React from 'react';
import './header.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg'
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase-utils';
const Header = ({ currentUser }) => (

  <div className="header">
    <Link to="/" className="logo-container">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">Shop</Link>
      <Link to="/contact" className="option">Contact</Link>
      {
        currentUser ?
          <div className="option" onClick={() => auth.signOut()}>
            Sign Out
          </div>
          :
          <Link to="/login" className="option">Login</Link>
      }

    </div>
  </div>
)

export default Header;