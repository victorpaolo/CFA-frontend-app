import React from 'react'
import { Link } from 'react-router-dom';

export default function Alternatives() {
    return (
        <div>
            <h2>Alternatives</h2>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>

        </div>
    )
}

