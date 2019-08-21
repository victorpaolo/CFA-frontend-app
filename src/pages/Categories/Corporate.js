import React from 'react'
import { Link } from 'react-router-dom';

export default function Corporate() {
    return (
        <div>
            {/* <button onClick={BrowserHistory.goBack}>Go Back</button> */}
            <h2>Corporate</h2>
            <Link to='/category/formula' activeClassName='active-link'>Formula</Link>
        </div>
    )
}

