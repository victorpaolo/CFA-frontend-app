import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import {withRouter, Link} from "react-router-dom";
import collectionService from './../services/collection-service'


class Formula extends Component {
    state = {
        title: "",
        collections: [],
        selectedCollection: "",
        formulaName:"",
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
        const { id } = this.props.match.params;
        console.log(this.props.match.params)
        const name = this.state.formulaName

        collectionService.addFormulaToCollection(name, id)
        .then(() => {
            this.setState({
                formulaName: [name],
                })
            })
            .catch( error => console.log(error))
        }

        handleSelectĆhange = (event) => {
            const { value, name } = event.target;
            this.setState({ [name]: value})
        }

        // get all collections of the user from api --> DONE
            // store the collection list in state as usersCollections --> DONE
            // change options by  the users collection  
    

    render() {
        const {collections} = this.state;
        return (
            <>
                <section>
                {!collections.length 
                    ? <button><Link to='/collections' >Create your collection</Link></button>
                    : 
                    <>
                    <select name="selectedCollection" onChange={this.handleSelectĆhange}>
                        <option value="" disabled selected>Select your option</option>
                        {collections.map((collection) => {
                        return(
                            <>
                                <button onClick={() => {this.handleFormSubmit(collection._id)}}>+</button>
                                <option value={collection._id}>{collection.title}</option>
                            </>
                        )
                        })}   
                    </select>
                    <button><Link to='/collections' >Create your collection</Link></button>
                    </>
                }
                </section>
            </>
        )
    }
}


export default withAuth(withRouter(Formula))


// collections.map((collection) => {
//     return (
//         <>
//             <select key={collection._id} name={collection.title} onChange={this.handleChange} defaultValue={this.state.category}>
//                 <option>{collection.title}</option>
//             </select>
//         </>
//     )
// })