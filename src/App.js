import React, {Component} from 'react';
import {BrowserRouter as Router, Route ,Switch} from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/PrivateRoute.js';
import AnonRoute from './components/AnonRoute.js';

import Profile from './pages/Profile.js';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/NotFound'
import Category from './pages/Category.js';
import Collections from './pages/Collections.js';
import OneCollection from './pages/OneCollection.js';
import CollectionAux from './pages/CollectionAux.js';
import EditCollection from './pages/EditCollection.js';


import AuthProvider from './context/auth-context.js';
import Alternatives from './pages/Categories/Alternatives'
import Corporate from './pages/Categories/Corporate'
import Economics from './pages/Categories/Economics'
import Equity from './pages/Categories/Equity'
import Financial from './pages/Categories/Financial'
import ReturnOnAssets from './components/Formulas/ReturnOnAssets'
import Quants from './pages/Categories/Quants'
import Kurtosis from './components/Formulas/Kurtosis'
import Portfolio from './pages/Categories/Portfolio'
import Fixed from './pages/Categories/Fixed'

import './App.css';
import 'milligram';

class App extends Component {
  stet

  render() {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <Navbar/>
            <h1>CharterHold</h1>
            <Switch>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/profile/:id" exact component={Profile} />
              <PrivateRoute path="/collections" exact component={Collections} />
              <PrivateRoute path="/private/collections/:id"  component={CollectionAux} />
              <PrivateRoute path="/private/collection/edit/:id"  component={EditCollection} />

              <PrivateRoute path="/private/collections/onecollection/:id" exact component={OneCollection} />
              <Route path="/" exact component={Home}/>
              <Route path="/about" exact component={About}/>
              <Route path="/category" exact component={Category}/>
              
              <Route path='/quants' exact component={Quants}/>
              <Route path='/formula/kurtosis' component={Kurtosis}/>
              <Route path='/economics' exact component={Economics}/>
              <Route path='/fra' exact component={Financial}/>
              <Route path='/formula/roa' exact component={ReturnOnAssets}/>
              <Route path='/corporate' exact component={Corporate}/>
              <Route path='/portfolio' exact component={Portfolio}/>
              <Route path='/equity' exact component={Equity}/>
              <Route path='/fixed' exact component={Fixed}/>
              <Route path='/alternatives' exact component={Alternatives}/>

              
              <Route component={NotFound}/>
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
