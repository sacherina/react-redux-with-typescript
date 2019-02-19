import * as React from 'react';

import Home from '../containers/Home';

import { Switch, Route } from 'react-router-dom';

const Routing = () => 
  <Switch>
    <Route exact path='/' component={Home}/>
  </Switch>;

export default Routing;
