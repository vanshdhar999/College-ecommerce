// src/app/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from './page';
import ItemDetails from './ItemDetails';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/item/:itemId" component={ItemDetails} />
      </Switch>
    </Router>
  );
};

export default App;
