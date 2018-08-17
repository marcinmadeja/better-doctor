// @flow strict
import * as React from 'react';
import { SIDEBAR_WIDTH, GUTTER } from 'constants/index';
import styled from 'styled-components';

const StyledPageContent = styled.div`
  width: calc(100% - ${SIDEBAR_WIDTH}px);
  padding: ${GUTTER}px;
`;

type Props = {
  children: React.Node,
};

const PageContent = ({ children }: Props) => {
  return (
    <StyledPageContent>
      {children}
    </StyledPageContent>
  );
};

export default PageContent;
