import React from 'react'
import { Link } from 'react-router-dom';

export default function Home() {
    return (
            <div >
                <h2>Topics</h2>
                <ul>
                    <section className="categories">
                        <li className="category"><Link className="category-link" to='/quants' >Quants</Link></li>
                        <li className="category"><Link className="category-link" to='/economics' >Economics</Link></li>
                    </section>
                    <section className="categories">
                        <li className="category"><Link className="category-link" to='/fra' >FRA</Link></li>
                        <li className="category"><Link className="category-link" to='/corporate' >Corporate</Link></li>
                    </section>
                    <section className="categories">
                        <li className="category"><Link className="category-link" to='/portfolio' >Portfolio</Link></li>
                        <li className="category"><Link className="category-link" to='/equity' >Equity</Link></li>
                    </section>
                    <section className="categories">
                        <li className="category"><Link className="category-link" to='/fixed' >Fixed</Link></li>
                        <li className="category"><Link className="category-link" to='/alternatives' >Alternatives</Link></li>
                    </section>
                </ul>
            </div>
    )
}
