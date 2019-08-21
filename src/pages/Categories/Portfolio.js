import React from 'react'
import { Link } from 'react-router-dom';

export default function Portfolio() {
    return (
        <div>
            <h2>Portfolio</h2>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>
 
        </div>
    )
}
