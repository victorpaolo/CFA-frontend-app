import React from 'react'

export default function CollectionsList(props) {
    return (
        <section>
        <h2>My Collection Formulas</h2>
            {props.collections.length > 0 ? props.collections.map((collection, index) => {
                return (
                <article key={index}>
                    <h2>{collection.title}</h2>
                </article>
                )
            }) : <p>No collection added</p>}
      </section>
    )
}

