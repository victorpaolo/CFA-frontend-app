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
import Quants from './pages/Categories/Quants'
import Portfolio from './pages/Categories/Portfolio'
import Fixed from './pages/Categories/Fixed'

import Kurtosis from './components/Formulas/Kurtosis'
import ReturnOnAssets from './components/Formulas/ReturnOnAssets'
import CostPreferredStock from './components/Formulas/CostPreferredStock'
import CrossPriceElasticity from './components/Formulas/CrossPriceElasticity'
import FlatCleanQuotedPrice from './components/Formulas/FlatCleanQuotedPrice'
import GdpIncome from './components/Formulas/GdpIncome'
import PriceOfCommodityFutures from './components/Formulas/PriceOfCommodityFutures'
import PurchasingStockMargin from './components/Formulas/PurchasingStockMargin'
import SharpeRatio from './components/Formulas/SharpeRatio'


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
              <Route path='/economics' exact component={Economics}/>
              <Route path='/fra' exact component={Financial}/>
              <Route path='/corporate' exact component={Corporate}/>
              <Route path='/portfolio' exact component={Portfolio}/>
              <Route path='/equity' exact component={Equity}/>
              <Route path='/fixed' exact component={Fixed}/>
              <Route path='/alternatives' exact component={Alternatives}/>

              <Route path='/formula/kurtosis' exact component={Kurtosis}/>
              <Route path='/formula/roa' exact component={ReturnOnAssets}/>
              <Route path='/formula/costpreferredstock' exact component={CostPreferredStock}/>
              <Route path='/formula/crosspriceelasticity' exact component={CrossPriceElasticity}/>
              <Route path='/formula/flatcleanquotedprice' exact component={FlatCleanQuotedPrice}/>
              <Route path='/formula/gdpincome' exact component={GdpIncome}/>
              <Route path='/formula/pricecommodityfutures' exact component={PriceOfCommodityFutures}/>
              <Route path='/formula/purchasingstockmargin' exact component={PurchasingStockMargin}/>
              <Route path='/formula/sharperatio' exact component={SharpeRatio}/>

              
              <Route component={NotFound}/>
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
  }
}

export default App;
