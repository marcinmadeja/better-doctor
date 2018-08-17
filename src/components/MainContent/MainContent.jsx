// @flow strict
import * as React from 'react';
import styled from 'styled-components';

const StyledMainContent = styled.div`
  display: flex;
`;

type Props = {
  children: React.Node,
};

const MainContent = ({ children }: Props) => {
  return (
    <StyledMainContent>
      {children}
    </StyledMainContent>
  );
};

export default MainContent;
