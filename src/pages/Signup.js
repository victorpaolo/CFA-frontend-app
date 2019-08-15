import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import withAuth from '../components/withAuth'


class Signup extends Component {

  state = {
    username: '',
    password: '',
    name:'',
    surname:'',
    email:'',
    birthday:''
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const name = this.state.name;
    const surname = this.state.surname;
    const email = this.state.email;
    const birthday = this.state.birthday;

    this.props.signup({ username, password, name, surname, email, birthday })
      .then( (user) => {
        console.log(user)
        this.setState({
            username: '',
            password: '',
            name:'',
            surname:'',
            email:'',
            birthday:''
        });
      })
      .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }

  render() {
    const { username, password, name, surname, email, birthday } = this.state;
    return (
      <>
        <form onSubmit={this.handleFormSubmit}>
          <label htmlFor='name'>Name:</label>
          <input id='name' type='text' name='name' value={name} onChange={this.handleChange} />
          <label htmlFor='surname'>Surname:</label>
          <input id='surname' type='text' name='surname' value={surname} onChange={this.handleChange} />
          <label htmlFor='email'>E-mail:</label>
          <input id='email' type='email' name='email' value={email} onChange={this.handleChange} />
          <label htmlFor='birthday'>Birthday:</label>
          <input id='birthday' type='date' name='birthday' value={birthday} onChange={this.handleChange} />
          <label htmlFor='username'>Username:</label>
          <input id='username' type='text' name='username' value={username} onChange={this.handleChange}/>
          <label htmlFor='password'>Password:</label>
          <input id='password' type='password' name='password' value={password} onChange={this.handleChange} />
          <input type='submit' value='Signup' />
        </form>

        <p>Already have account? 
          <Link to={'/login'}> Login</Link>
        </p>

      </>
    )
  }
}

export default withAuth(Signup);