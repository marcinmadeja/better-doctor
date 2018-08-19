// @flow strict
import * as React from 'react';
import styled from 'styled-components';
import { USER, GUTTER, THEME_COLORS } from 'constants/index';
import UserAvatar from './UserAvatar';

const UserWrap = styled.div`
  display: flex;
  align-items: center;
  padding: ${GUTTER / 2}px ${GUTTER / 2}px;
  background-color: ${THEME_COLORS.darkLighter};
  font-size: 18px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Name = styled.div`
  margin-left: 15px;
  color: ${THEME_COLORS.darkContrast};
  letter-spacing: 0.7px;
`;

class User extends React.Component<{}> {
  render() {
    const userName = `${USER.name.first} ${USER.name.last}`;

    return (
      <UserWrap>
        <UserAvatar
          src={USER.avatar}
          alt={userName}
          status={USER.status}
        />

        <Name>
          {userName}
        </Name>
      </UserWrap>
    );
  }
}

export default User;
