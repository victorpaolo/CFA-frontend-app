import React, { Component } from 'react';
import collectionService from '../services/collection-service'
import withAuth from '../components/withAuth'


class CreateCollection extends Component {
    state = {
    title: '',
    collections: [],
}



//añadimos una collecion nueva --> on change para el formulario y un submit 
handleChange = (event) => {  
    console.log(event.target.value)
    const { value} = event.target;
    this.setState({title: value});
}

handleSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    
    collectionService.createCollection({title})
        .then((data) => {
            console.log(data)
            this.props.pushNewCollection(data.createdCollection)
        })
}



render() {
    const {collections} = this.state;
    console.log(collections)
    return (
        <div>
            <h1>Create New Collection</h1>
            <form onSubmit={this.handleSubmit}>
                <input 
                    type="text"
                    name="title"
                    defaultValue="Write"
                    onChange={this.handleChange}
                    />
                    <button type="submit" onClick={this.handleSubmit}>
                        Create
                    </button>
            </form>
        </div>
    )
    }
}

export default withAuth(CreateCollection);
    
