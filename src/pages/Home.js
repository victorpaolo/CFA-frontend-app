import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
            <div >
                <h2>Topics</h2>
                <ul>
                    <section className="categories">
                        <li className="category"><Link to='/quants' >Quants</Link></li>
                        <li className="category"><Link to='/economics' >Economics</Link></li>
                    </section>
                    <section className="categories">
                        <li className="category"><Link to='/fra' >FRA</Link></li>
                        <li className="category"><Link to='/corporate' >Corporate</Link></li>
                    </section>
                    <section className="categories">
                        <li className="category"><Link to='/portfolio' >Portfolio</Link></li>
                        <li className="category"><Link to='/equity' >Equity</Link></li>
                    </section>
                    <section className="categories">
                        <li className="category"><Link to='/fixed' >Fixed</Link></li>
                        <li className="category"><Link to='/alternatives' >Alternatives</Link></li>
                    </section>
                </ul>
            </div>
    )
}
