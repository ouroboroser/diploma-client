import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Main } from './pages/main';
import './App.css';

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

const B = () => {
  return (
    <div>
      hhhh
    </div>
  );
};

export default function App() {
  
    return(
      <Router>
        <Switch>
        <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    )
  
};

//export default App;
