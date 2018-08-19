// @flow strict
import * as React from 'react';
import type { Route } from 'routes/routes';
import Navigation from 'components/Navigation/Navigation';

type Props = {
  list: Array<Route>,
}

const Menu = ({ list }: Props) => {
  return (
    <Navigation>
      {list.map(route => (
        <Navigation.Item
          key={route.path}
          icon={route.icon}
          path={route.path}
        >
          {route.name}
        </Navigation.Item>
      ))}
    </Navigation>
  );
};

export default Menu;
