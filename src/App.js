import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/home'

import './App.css';

const App=()=>{
  return(
    <Router>
    <Switch>
        <Route exact path="/" component={Home}/>
    </Switch>
    </Router>
  )
}

export default App;
