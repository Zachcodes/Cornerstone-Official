import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Login from './Views/Login/Login.js';
import Admin from './Views/Admin/Admin.js';

export default (
  <Switch>
    <Route path='/login' component={Login} />
    <Route path='/admin' component={Admin} />
  </Switch>
)
