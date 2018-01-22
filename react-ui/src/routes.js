import React from 'react';
import {Switch, Route} from 'react-router-dom';

//Components
import Admin from './Views/Admin/Admin.js';

export default (
  <Switch>
    <Route path='/admin' component={Admin} />
  </Switch>
)
