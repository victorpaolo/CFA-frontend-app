import React, { Component } from 'react'
import withAuth from '../components/withAuth'
import {withRouter, Link} from "react-router-dom";
import collectionService from './../services/collection-service'


class Formula extends Component {
    state = {
        title: "",
        collections: [],
        selectedCollectionId: undefined,
        formulaName:"",
    }

    //vemos la lista de collecciones
    componentDidMount () {
        collectionService.getCollections()
        .then(response => {
          console.log(response);
          const { formulaName } = this.props;
          this.setState({
            collections: response.listOfCollections,
            formulaName
          })
        }) 
      }

      
      //añadimos la formula a la collecion
      handleFormSubmit = (event) => {
        event.preventDefault();
        const { formulaName, selectedCollectionId} = this.state;

        collectionService.addFormulaToCollection(formulaName, selectedCollectionId)
            .then(() => {
                this.setState({ selectedCollectionId: undefined })
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
        const {collections, selectedCollectionId} = this.state;
        return (
            <>
                <section>
                {!collections.length 
                    ? <button><Link to='/collections' >Create your collection</Link></button>
                    : 
                    <>
                    <select name="selectedCollectionId" onChange={this.handleSelectĆhange}>
                        <option value="" disabled selected>Select your option</option>
                        {collections.map((collection) => {
                        return(
                            <>
                                <option value={collection._id}>{collection.title}</option>
                            </>
                        )
                        })}   
                    </select>
                    {selectedCollectionId
                        ? <button onClick={this.handleFormSubmit}>Add To Collection</button>
                        : null
                    }
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