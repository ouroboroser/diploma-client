import React from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { routers } from './routers';
import { PrivateRoute } from './privateRoute';

export default function App() {
  return(
  <Router>
    <Switch>
      {routers.map((router, index ) => {
        if (router.auth) {
          return(
            <PrivateRoute key = {index} exact = {router.exact} path = {router.path} component = {router.component} />
          )
        } else {
          return (<Route key = {index} exact = {router.exact} path = {router.path} component = {router.component} />);
        };
      })}
    </Switch>
  </Router>
  )
};