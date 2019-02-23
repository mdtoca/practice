import styled, { css } from 'styled-components';
import { rem } from 'polished';
import theme from '../lib/styles/theme';

const gridColumns = css`
  min-width: 900px;
  display: grid;
  grid-template-columns: 40px 1fr 1fr 1fr 1fr 1fr 1fr 60px;
  grid-column-gap: 20px;
  align-items: center;
  justify-items: start;
  padding: 8px 16px;
`;

export const TableWrap = styled.div`
  padding: 16px 16px 0 16px;
  margin: 30px;
`;

export const TableHead = styled.div`
  width: 100%;
  min-height: 40px;
  ${gridColumns};
  border: 1px solid ${theme.colors.black};
  background-color: ${theme.colors.white};
  color: black;
  text-transform: uppercase;
  > p {
    font-size: ${rem(12)};
  }
`;

export const TableRow = styled.div`
  width: 100%;
  min-height: 48px;
  ${gridColumns};
  background-color: ${theme.colors.white};
  border: 1px solid ${theme.colors.black};
  border-top: none;
  font-size: ${rem(14)};
  color: black;
`;

export const RowItem = styled.p`
  margin: 0;
  color: ${({ isName }) =>
  isName ? `${theme.colors.primary}` : `${theme.colors.black}`};
  cursor: ${({ isName }) => (isName ? 'pointer' : 'none')};
  font-weight: ${({ isName }) => (isName ? 900 : 'normal')};
  > span {
    font-weight: normal;
  }
`;

