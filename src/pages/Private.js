import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth'

class Private extends Component {
  render() {
    return (
      <div>
        <h2>Private Page</h2>
        <Link to='/private/collections/:id' activeClassName='active-link'>Collections</Link>
      </div>
    )
  }
}

export default withAuth(Private);