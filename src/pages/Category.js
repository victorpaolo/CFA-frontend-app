import React from 'react'
import { Link } from 'react-router-dom';

export default function Category() {
    return (
        <div>
            <h2>Category Page</h2>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>
        </div>
    )
}
