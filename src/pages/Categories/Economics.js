import React from 'react'
import { Link } from 'react-router-dom';

export default function Economics() {
    return (
        <div>
            <h2>Economics</h2>
            <div className="links-list">
                <Link to='/formula/crosspriceelasticity' >Cross Price Elasticity</Link>
                <Link to='/formula/gdpincome' >GDP Income Approach</Link>
            </div>
        </div>
    )
}


