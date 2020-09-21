import React from 'react';
import Login from './components/authentication/home/index';
import { Route, Switch } from 'react-router-dom';
 import Password from '../src/components/authentication/login/index';
import Register from './components/authentication/register/index';
import Dashboard from './components/authentication/dashboard/index';

const Routes = () => (
  <Switch>
   
    <Route
      exact
      path='/login'
      name='Login'
      component={Login}
    />
      <Route
      exact
      path='/password'
      name='Password'
      component={Password}
    />

      <Route
      exact
      path='/dashboard'
      name='Dashboard'
      component={Dashboard}
    />
    <Route
    exact
    path='/register'
    name='Register'
    component={Register}
  />

   
  </Switch>
);

export default Routes;


