import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Login from './Views/Login/Login.js';
import Admin from './Views/Admin/Admin.js';
import Dashboard from './Views/Dashboard/Dashboard.js';

export default (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/admin' component={Admin} />
    <Route path='/dashboard' component={Dashboard} />
  </Switch>
)
