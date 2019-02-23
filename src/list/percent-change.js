// @flow
import React from 'react';
import styled from 'styled-components';

const PercentChangeWrapper = styled.p`
  color: ${({ percentChange }) => (percentChange > 0 ? 'green' : 'red')};
`;

export const PercentChange = ({ percentChange }: { percentChange: number }) => (
  <PercentChangeWrapper percentChange={percentChange}>
    {percentChange}%
  </PercentChangeWrapper>
);

export default PercentChange;
