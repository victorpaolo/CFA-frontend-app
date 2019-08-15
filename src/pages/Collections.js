import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth'
import collectionService from '../services/collection-service'


class Collections extends Component {

  state = {
    title: '',
  };

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    const title = this.state.title;
    const newCollection = {title};
    //make new service

    //call to end point in service(in service file)

    //import at top of file

    // call the method here and then set the state from the data returned

    //high five jack
    this.props.handlePropsNewCollection(newCollection)
    this.setState({
        title:'',
    })
  }

  addNewCollection = (title) => {
    return collectionService.signup(title)
    .then((title) => {
        this.setState({
            [title]: title
        })
    })
}

  generateList = () => {
    const listItems = [];
    this.state.data.forEach((title, index) => {
      listItems.push(<li key={index}>
        <p>{title.name}</p>
      </li>)
    })
    return listItems;
  }

  render() {
    const { title } = this.state;
    return (
      <>
        <h1>Collections Page</h1>
        <Link to='/private/collections/onecollection/:id' activeClassName='active-link'>Collection unique</Link>

        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='title'>Title:</label>
          <input 
          id='title' 
          type='text' 
          name='title' 
          value={title} 
          onChange={this.handleChange} />
          <button>Add new collection</button>
        </form>

      </>
    )
  }
}

export default withAuth(Collections);