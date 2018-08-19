// @flow strict
import * as React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
`;

const styles = {
  menuItem: {
    '&.active': {
      color: 'red',
      '& svg': {
        color: 'red',
      },
    },
  },
};

type Props = {
  icon: React.Node,
  children: React.Node,
  path: string,
  classes: {
    menuItem: string
  }
};

const Item = ({ icon, path, children, classes }: Props) => {
  return (
    <MenuItem component={NavLink} to={path} className={classes.menuItem}>
      <ListItemIcon>
        <StyledIcon>
          {icon}
        </StyledIcon>
      </ListItemIcon>

      {children}
    </MenuItem>
  );
};

export default withStyles(styles)(Item);
