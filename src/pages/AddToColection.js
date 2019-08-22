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
    

    render() {
        const {collections, selectedCollectionId} = this.state;
        return (
            <>
                <section className="form-addcollection">
                {!collections.length 
                    ? <button><Link className="button-link" to='/collections' >My Collections</Link></button>
                    : 
                    <>
                    <select name="selectedCollectionId" onChange={this.handleSelectĆhange}>
                        <option defaultValue="">Select your option</option>
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
                    <button><Link className="button-link" to='/collections' >My Collections</Link></button>
                    </>
                }
                </section>
            </>
        )
    }
}


export default withAuth(withRouter(Formula))

