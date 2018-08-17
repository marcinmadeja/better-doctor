import React from 'react';
import { Route } from 'react-router-dom';
import { mainRoutes } from 'routes/routes';

const Root = () => {
  return (
    mainRoutes.map(route => (
      <Route
        key={route.path}
        path={route.path}
        render={route.component}
      />
    ))
  );
};

export default Root;
