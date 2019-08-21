import React from 'react'
import { Link } from 'react-router-dom';

export default function Financial() {
    return (
        <div>
            <h2>FRA</h2>
            <ul>
                <li><Link to='/formula/kurtosis' >Kurtosis</Link></li>
                <li><Link to='/formula/roa' >ROA</Link></li>
            </ul>
        </div>
    )
}


