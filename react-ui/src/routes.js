import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Login from './Views/Login/Login.js';
import Admin from './Views/Admin/Admin.js';
import Dashboard from './Views/Dashboard/Dashboard.js';
import Home from './Views/Home/Home.js';
import Contact from './Views/Contact/Contact.js';
import Philosophy from './Views/Philosophy/Philosophy.js';
import Portfolio from './Views/Portfolio/Portfolio.js';

export default (
  <Switch>
    <Route path='/' exact component={Home} />
    <Route path='/philosophy' component={Philosophy} />
    <Route path='/contact' component={Contact} />
    <Route path='/portfolio' component={Portfolio} />
    <Route path='/login' component={Login} />
    <Route path='/admin' component={Admin} />
    <Route path='/dashboard' component={Dashboard} />
  </Switch>
)
