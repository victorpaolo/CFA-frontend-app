import React from 'react'
import { Link } from 'react-router-dom';

export default function Equity() {
    return (
        <div>
            <h2>Equity</h2>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>
        </div>
    )
}
