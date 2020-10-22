import React from 'react';
import {Link} from 'react-router-dom';

import './header.scss';

function Header() {
  return(
    <div className="header">
      <div className="header__button">
        <Link to="/">Home</Link>
      </div>
      <div className="header__button">
        <Link to="/products">Productos</Link>
      </div>
    </div>
  )
}


export default Header;