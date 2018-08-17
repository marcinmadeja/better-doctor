// @flow strict
import * as React from 'react';
import { SIDEBAR_WIDTH } from 'constants/index';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';

const styles = () => ({
  drawerPaper: {
    position: 'relative',
    width: SIDEBAR_WIDTH,
  },
});

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
        drawer
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
