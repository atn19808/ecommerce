import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopePage from './pages/shop/shop.component';
import Header from './components/header/header.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopePage} />
      </Switch>
    </div>
  );
}

export default App;
