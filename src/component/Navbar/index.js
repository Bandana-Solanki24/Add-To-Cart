import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'


const Navbar = ({cartCount}) => {
  

  return (
    
    <nav className="navbar-container">
      
        
        
          <ul>
            {/* <li>
              <Link  to="/">
                Registration
              </Link>
            </li>
            <li >
              <Link  to="/loginPage">
                LoginPage
              </Link>
            </li> */}
            <li>
              <Link  to="/home">
                Home
              </Link>
            </li>
            <li >
              
              <Link  to="/cart">
              Cart {cartCount > 0 && `${cartCount}`}
              </Link>
              
            </li>
          </ul>
        
      
    </nav>
    
  );
};

export default Navbar;
