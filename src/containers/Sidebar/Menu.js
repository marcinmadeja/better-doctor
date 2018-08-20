// @flow strict
import * as React from 'react';
import type { Route } from 'routes/routes';
import { withStyles } from '@material-ui/core';
import { THEME_COLORS } from 'constants/index';
import Navigation from 'components/Navigation/Navigation';

type Props = {
  list: Array<Route>,
  classes: { [string]: string }
}

const styles = {
  navItem: {
    color: THEME_COLORS.darkText,
    '& svg': {
      width: 22,
      color: THEME_COLORS.darkText,
    },

    '&.active': {
      color: THEME_COLORS.darkContrast,
      '& svg': {
        color: THEME_COLORS.darkContrast,
      },
    },
  },
};

export const Menu = ({ list, classes }: Props) => {
  return (
    <Navigation>
      {list.map(route => (
        <Navigation.Item
          key={route.path}
          icon={route.icon}
          path={route.path}
          className={classes.navItem}
        >
          {route.name}
        </Navigation.Item>
      ))}
    </Navigation>
  );
};

export default withStyles(styles)(Menu);
