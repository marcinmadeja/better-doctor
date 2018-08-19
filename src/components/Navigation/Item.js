// @flow strict
import * as React from 'react';
import classnames from 'classnames';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';

const StyledIcon = styled.span`
  display: flex;
  align-items: center;
  height: 100%;
`;

type Props = {
  icon: React.Node,
  children: React.Node,
  path: string,
  className?: string,
};

const Item = ({ icon, path, children, className }: Props) => {
  const c_className: string = className || '';
  const componentClasses = classnames({ [c_className]: className });

  return (
    <MenuItem
      to={path}
      exact
      component={NavLink}
      className={componentClasses}
    >
      <ListItemIcon>
        <StyledIcon>
          {icon}
        </StyledIcon>
      </ListItemIcon>

      {children}
    </MenuItem>
  );
};

Item.defaultProps = {
  className: '',
};

export default Item;
