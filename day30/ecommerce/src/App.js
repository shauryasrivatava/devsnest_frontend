import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={ProductListing} />
        <Redirect to='/' />
      </Switch>
    </div>
  );
}

export default App;
