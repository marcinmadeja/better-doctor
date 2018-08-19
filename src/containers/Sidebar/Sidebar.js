// @flow strict
import * as React from 'react';
import { SIDEBAR_WIDTH, THEME_COLORS } from 'constants/index';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

import { mainRoutes } from 'routes/routes';
import Menu from './Menu';
import User from './User/User';

const styles = {
  drawerPaper: {
    position: 'relative',
    width: SIDEBAR_WIDTH,
    backgroundColor: THEME_COLORS.dark,
  },
};

type Props = {
  classes: {
    drawerPaper: string
  }
};

class Sidebar extends React.Component<Props> {
  render() {
    const { classes } = this.props;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        open
      >
        <User />

        <Menu list={mainRoutes} />
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
