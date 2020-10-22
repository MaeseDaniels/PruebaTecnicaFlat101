import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ProductList from './Components/ProductList/ProductList';

import './App.scss';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
