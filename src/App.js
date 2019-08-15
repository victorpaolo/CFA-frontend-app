import React, {Component} from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Private from './pages/Private';
import Profile from './pages/Profile.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Category from './pages/Category.js';
import Formula from './pages/Formula.js';
import Collections from './pages/Collections.js';
import OneCollection from './pages/OneCollection.js';
import CollectionAux from './pages/CollectionAux.js';

import AuthProvider from './context/auth-context.js';

import './App.css';
import 'milligram';

class App extends Component {
  stet

  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <h1>CFA Formulary</h1>
            <Navbar/>
            <Switch>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/private" exact component={Private} />
              <PrivateRoute path="/private/:id" exact component={Profile} />
              <PrivateRoute path="/private/collections/:id" exact component={Collections} />
              <PrivateRoute path="/private/collections/:id"  component={CollectionAux} />
              <PrivateRoute path="/private/collections/onecollection/:id" exact component={OneCollection} />
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/category" exact component={Category}/>
              <Route path="/category/formula" exact component={Formula}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
