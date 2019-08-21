import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
            <div className="">
                <h2>Topics</h2>
                <ul>
                    <li><Link to='/category' >Category</Link></li>
                    <li><Link to='/quants' >Quants</Link></li>
                    <li><Link to='/economics' >Economics</Link></li>
                    <li><Link to='/fra' >FRA</Link></li>
                    <li><Link to='/corporate' >Corporate</Link></li>
                    <li><Link to='/portfolio' >Portfolio</Link></li>
                    <li><Link to='/equity' >Equity</Link></li>
                    <li><Link to='/fixed' >Fixed</Link></li>
                    <li><Link to='/alternatives' >Alternatives</Link></li>
                </ul>
            </div>
    )
}
