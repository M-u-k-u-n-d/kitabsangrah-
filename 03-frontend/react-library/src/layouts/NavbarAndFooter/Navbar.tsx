import React from "react";
import logo from '../../../public/logo.png'
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useOktaAuth } from "@okta/okta-react";
import { SpinnerLoading } from "../Utils/SpinnerLoading";

const Navbar = () => {

  const {oktaAuth, authState} = useOktaAuth();
  const navigate = useNavigate();

  if(!authState){
    return <SpinnerLoading/>
  }


  const handleLogout = async () => {
    try {
      await oktaAuth.closeSession(); // End session on Okta
      oktaAuth.clearStorage();       // Clear local tokens
      navigate('/');                 // Navigate to home
    } catch (err) {
      console.error('Logout failed:', err);
    }
  };
  console.log(authState);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark main-color py-3">
      <div className="container-fluid">
        <span className="navbar-brand">
          <img
            src={logo}
            alt="app-logo"
            className="img-fluid rounded-end"
            style={{ height: "3rem", width: "auto"}}
          />
        </span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle Navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/home" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/search" >
                Search Books
              </Link>
            </li>
             {authState.isAuthenticated &&
              <li className='nav-item'>
                <NavLink className='nav-link' to='/shelf'>Shelf</NavLink>
              </li>
            }
            {authState.isAuthenticated && authState.accessToken?.claims?.userType === 'admin' &&
              <li className='nav-item'>
                <NavLink className='nav-link' to='/admin'>Admin</NavLink>
              </li>
            }
          </ul>
          <ul className="navbar-nav ms-auto">
            {!authState.isAuthenticated ? 
            <li className="nav-item m-1">
              <Link type="button" className="btn btn-outline-light" to="/login">
                Sign in
              </Link>
            </li> :
            <button className="btn btn-outline-light" onClick={handleLogout}> Logout</button>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
