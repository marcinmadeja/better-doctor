// @flow strict
import * as React from 'react';
import styled, { css } from 'styled-components';
import { withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { COLORS } from 'config/theme';

const StyledUserAvatar = styled.div`
  position: relative;
  display: inline-block;
`;

type StatusProps = {
  status?: string,
};

const Status = (styled.div`
  width: 11px;
  height: 11px;
  border-radius: 100%;
  position: absolute;
  bottom: 3px;
  right: 3px;

  ${props => props.status === 'active' && css`
    background-color: ${COLORS.success};
  `}

  ${props => props.status === 'inactive' && css`
    background-color: ${COLORS.failure};
  `}
`: React.ComponentType<StatusProps>);

const styles = {
  bigAvatar: {
    width: 50,
    height: 50,
  },
};

type Props = {
  src: string,
  alt?: string,
  status: string,
  classes: { [string]: string },
};

const UserAvatar = ({ src, alt, status, classes }: Props) => {
  return (
    <StyledUserAvatar>
      <Avatar src={src} alt={alt} className={classes.bigAvatar} />

      <Status status={status} />
    </StyledUserAvatar>
  );
};

UserAvatar.defaultProps = {
  alt: '',
};

export default withStyles(styles)(UserAvatar);
