import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { Main } from './pages/main';
import { Docs, Home, SignIn } from './pages';
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
        <Route path="/" exact = {true} component = {Home} />
        <Route path="/docs" exact = {false} component = {Docs}/>
        <Route path="/signin" exact = {false} component = {SignIn}/>
        <Route path="/users" exact = {false } component = {Users}/>
        {/* <Route path="/"> <Main /> </Route> */}
        {/* <Route path="/" exact = {true}> <Home /> </Route> */}
    
        </Switch>
      </Router>
    )
  
};

//export default App;
