import React from 'react'
import { Link } from 'react-router-dom';

export default function OneCollection() {
    return (
        <div>
            <h1>One Collection</h1>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>
        </div>
    )
}
