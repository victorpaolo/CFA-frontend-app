import React from 'react'
import { Link } from 'react-router-dom';

export default function Economics() {
    return (
        <div>
            <h2>Economics</h2>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>
        </div>
    )
}


