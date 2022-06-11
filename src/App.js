import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import { routers } from './routers';

export default function App() {
  const data = JSON.stringify(localStorage.getItem('data'));

  console.log('jj', data);

  return(
  <Router>
    <Switch>
      {routers.map((router, index ) => {
        if (router.auth=== true & data === null ) {
          console.log(router.auth, data)
          return (<Redirect to = '/signin'/>)
        } else {
          return (<Route key = {index} path = {router.path} exact = {router.exact} component = {router.component} />)
        }; 
        })}
    </Switch>
  </Router>
  )
};