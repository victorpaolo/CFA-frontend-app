import React, { Component } from 'react'
import collectionService from './../services/collection-service'

export default class EditCollection extends Component {
    state = {
        title: "",
        formulas: [],
    }

    componentDidMount() {
        const { id } = this.props.match.params;

        collectionService.getCollectionById(id)
            .then((collection) => {
                const { title, formulas } = collection;
                this.setState({ title, formulas })
            })
    }
    
    handleChange = (event) => {
        const  { name, value } = event.target;
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { id } = this.props.match.params;
        const collection = this.state;
        
        collectionService.editCollection(collection, id)
            .then((data) => {
                this.props.history.push("/collections")
            })
    }


    render() {
        const { title, formulas } = this.state;
        return (    
            <div>
                <h3>{title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="title"
                        defaultValue={title}
                        onChange={this.handleChange}
                        />
                        <button type="submit" onClick={this.handleSubmit}>
                            Update
                        </button>
                </form>
                <p>{ formulas }</p>
                {/* <Link to={`/formula/${forumlaName}`}/> */}
            </div>
        )
    }
}
