import React from 'react';
import { Route } from 'react-router-dom';
import { mainRoutes } from 'routes/routes';
import Sidebar from 'containers/Sidebar/Sidebar';
import PageContent from 'components/PageContent/PageContent';
import MainContent from 'components/MainContent/MainContent';

const Root = () => {
  return (
    <MainContent>
      <Sidebar />

      <PageContent>
        {mainRoutes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            render={route.component}
          />
        ))}
      </PageContent>
    </MainContent>
  );
};

export default Root;
