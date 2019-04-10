import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Aboutus from './AboutUs';
import Customer from './Customer';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/aboutus' component={Aboutus} />
          <Route exact path='/customer' component={Customer} />
          <Route exact path='/home' component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
