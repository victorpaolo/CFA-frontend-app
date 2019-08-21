import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu'
import withAuth from './withAuth'

class Navbar extends Component {

  showSettings (event) {
    event.preventDefault();}

  render() {  
    return (
      <div>
        {this.props.isLoggedIn ? (
          <div className="container-navbar">
            <div className="navbar">
            <Menu>
              <NavLink className="nav-links" exact to='/' activeClassName='active-link'>Home</NavLink>
              <NavLink className="nav-links" to='/about' activeClassName='active-link'>About</NavLink>
              <NavLink className="nav-links" to='/profile/93939393' activeClassName='active-link'>Profile</NavLink>
              <NavLink className="nav-links" to="/collections" activeClassName='active-link'>Collections</NavLink>
              <p onClick={this.props.logout}>Logout</p>
            </Menu>
            </div>
            <p className="username">{this.props.user.name}</p>
          </div>
        ) : (
          <>
          <div className="navbar">
          <Menu>
            <NavLink className="nav-links" exact to='/' activeClassName='active-link'>Home</NavLink>
            <NavLink className="nav-links" to='/about' activeClassName='active-link'>About</NavLink>
            <NavLink className="nav-links" to='/login' activeClassName='active-link'>Login</NavLink>
            <NavLink className="nav-links" to='/signup' activeClassName='active-link'>Signup</NavLink>
            {/* <NavLink to='/private' activeClassName='active-link'>Private</NavLink> */}
          </Menu>
          </div>
          </>         
        )}


      </div>
    )
  }
}

export default withAuth(Navbar);