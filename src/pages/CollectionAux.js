import React, { Component } from 'react'
import Collections from './Collections';
import CollectionsList from './CollectionsList';
import withAuth from '../components/withAuth'

class CollectionAux extends Component {
    state = {
        collections: [],
        isShowing: true,
      }
    
    handleAddNewCollection = (newCollection) => {
        const collectionsCopy = [...this.state.collections];
        collectionsCopy.push(newCollection);
        this.setState({
            collections: collectionsCopy,
        })
    }

    render() {
        return (
            <div>
                <h1>im here </h1>
                {this.state.isShowing ? <Collections handlePropsNewCollection={this.handleAddNewCollection}/> : null}
                <CollectionsList cities={this.state.collections} />
                <p>Here</p>
            </div>
        )
    }
}

export default withAuth(CollectionAux);