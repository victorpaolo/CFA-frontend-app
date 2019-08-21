import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import {withRouter, Link} from "react-router-dom";
import collectionService from './../services/collection-service'


class Formula extends Component {
    state = {
        title: "Pepe",
        collections: [],
    }

    //vemos la lista de collecciones
    componentDidMount () {
        collectionService.getCollections()
        .then(response => {
          console.log(response);
          this.setState({
            collections: response.listOfCollections,
          })
        }) 
      }

      
      //añadimos la formula a la collecion
      handleFormSubmit = (event) => {
        event.preventDefault();
        const url = this.props.match.path;
        console.log(this.props.match.path);
        collectionService.addFormulaToCollection(url)
        .then(() => {
            this.setState({
                collections: url,
                })
            })
            .catch( error => console.log(error))
        }

        // get all collections of the user from api --> DONE
            // store the collection list in state as usersCollections --> DONE
            // change options by  the users collection  
    

    render() {
        const {collections} = this.state;
        console.log(collections)
        return (
            <>
                <section>
                {collections.length > 0 ? collections.map((collection) => {
                    return(
                        <>
                        <select>
                            <option>{collection.title}</option>
                        </select>
                        <button onClick={() => {
                        this.handleFormSubmit(collection._id)
                        }}>+</button>
                        </>
                    )
                    
                    }):<button><Link to='/collections' >Create your collection</Link></button>}
                </section>
            </>
        )
    }
}


export default withAuth(withRouter(Formula))

// render() {
//     const {collections} = this.state;
//     return (
//         <>
//             <section>
//             {collections.length > 0 ? collections.map((collection) => {
//                 return (
//                 <>
//                     <select key={collection._id} name="title" onChange={this.handleChange} defaultValue={this.state.category}>
//                         <option>{collection.title}</option>
//                         <button onClick={() => {
//                         this.handleFormSubmit(collection._id)
//                         }}>+</button>
//                     </select>
//                     <section>
//                     <Link to='/collections' >Create your collection</Link>
//                     </section>
//                 </>
//                 )
//             }):<Link to='/collections' >Create your collection</Link>}
//             </section>
//         </>


// collections.map((collection) => {
//     return (
//         <>
//             <select key={collection._id} name={collection.title} onChange={this.handleChange} defaultValue={this.state.category}>
//                 <option>{collection.title}</option>
//             </select>
//             <button onClick={() => {
//             this.handleFormSubmit(collection._id)
//             }}>+</button>
//         </>
//     )
// })