// @flow strict
import * as React from 'react';
import HomePage from 'pages/HomePage/HomePage';
import * as routes from './routeTypes';

type Route = {
  exact: boolean,
  path: string,
  component: React.Node,
};

export const mainRoutes: Array<Route> = [
  {
    exact: true,
    path: routes.Main,
    component: HomePage,
  },
];
