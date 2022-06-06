import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import { routers } from './routers';

export default function App() {
  return(
  <Router>
    <Switch>
      {routers.map(router => {
        return (<Route path = {router.path} exact = {router.exact} component = {router.component} />)
        })}
    </Switch>
  </Router>
  )
};