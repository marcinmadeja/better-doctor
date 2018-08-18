// @flow strict
import * as React from 'react';
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
};

const Item = ({ icon, children }: Props) => {
  console.log(icon);
  return (
    <MenuItem>
      <ListItemIcon>
        <StyledIcon>
          {icon}
        </StyledIcon>
      </ListItemIcon>

      {children}
    </MenuItem>
  );
};

export default Item;
