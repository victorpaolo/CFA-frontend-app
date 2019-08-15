import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth'


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
    this.props.handlePropsNewCollection(newCollection)
    this.setState({
        title:'',
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