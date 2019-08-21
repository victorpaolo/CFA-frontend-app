import React from 'react'
import { Link } from 'react-router-dom';

export default function Fixed() {
    return (
        <div>
            <h2>Fixed</h2>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>

        </div>
    )
}
