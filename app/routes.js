// @flow
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import ViewVMsPage from './containers/ViewVMsPage';
import CreateVMPage from './containers/CreateVMPage';


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="view" component={ViewVMsPage} />
    <Route path="create" component={CreateVMPage} />
  </Route>
);
