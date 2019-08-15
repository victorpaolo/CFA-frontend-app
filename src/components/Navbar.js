import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import withAuth from './withAuth'

class Navbar extends Component {
  render() {  
    return (
      <div>
        {this.props.isLoggedIn ? (
          <>
            <NavLink exact to='/' activeClassName='active-link'>Home</NavLink>
            <NavLink to='/about' activeClassName='active-link'>About</NavLink>
            <NavLink to='/private/93939393' activeClassName='active-link'>Profile</NavLink>
            <NavLink to='/private' activeClassName='active-link'>Private</NavLink>
            <p>username: {this.props.user.username}</p>
            <p onClick={this.props.logout}>Logout</p>
          </>
        ) : (
          <>
            <NavLink exact to='/' activeClassName='active-link'>Home</NavLink>
            <NavLink to='/login' activeClassName='active-link'>Login</NavLink>
            <NavLink to='/signup' activeClassName='active-link'>Signup</NavLink>
            <NavLink to='/about' activeClassName='active-link'>About</NavLink>
            <NavLink to='/private' activeClassName='active-link'>Private</NavLink>
          </>         
        )}


      </div>
    )
  }
}

export default withAuth(Navbar);