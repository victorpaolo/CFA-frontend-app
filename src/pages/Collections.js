import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import collectionService from '../services/collection-service'
import withAuth from '../components/withAuth'
import CreateCollection from './CreateCollection';



class Collections extends Component {
      state = {
        title: "",
        collections: [],
    }

    //Vemos la lista de colleciones on top
    componentDidMount () {
      collectionService.getCollections()
      .then(response => {
        console.log(response);
        this.setState({
          collections: response.listOfCollections,
        })
      }) 
    }


    //eliminamos una colleccion

    handleDeleteClick = (id) => {
      collectionService.deleteCollection(id)
      .then(() => {
        const filteredCollections = this.state.collections.filter((singleCollection) => {
          return singleCollection._id !== id
        })
        this.setState({
          collections: filteredCollections
        })
      })
    }

    changeCollections = (collection) => {
      const newArray = [...this.state.collections]
      newArray.push(collection)
      this.setState({
        collections: newArray
      })
    }
    
    render() {
      const {collections} = this.state;
      console.log(collections)
      return (
      <>
        <h2>My collections</h2>
        <CreateCollection pushNewCollection={this.changeCollections}/>
        <section>
          {collections.length > 0 ? collections.map((collection) => {
            return (
              <article key={collection._id} className="collections">
                <button onClick={() => {
                  this.handleDeleteClick(collection._id)
                }}>X</button>
                <h4>{collection.title}</h4>
              <button><Link to={`/private/collection/edit/${collection._id}`}>Go</Link></button>
              </article>
            )
          }):<p>No collections created yet</p>}
        </section>
        </>
        )
      }
    }
    
    export default withAuth(Collections);
    
