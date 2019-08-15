import React from 'react'
import { Link } from 'react-router-dom';

export default function Category() {
    return (
        <div>
            <h1>Category Page</h1>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>
        </div>
    )
}
