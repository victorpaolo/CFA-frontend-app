import React from 'react'
import { Link } from 'react-router-dom';

export default function OneCollection() {
    return (
        <div>
            <h2>One Collection</h2>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>
        </div>
    )
}
