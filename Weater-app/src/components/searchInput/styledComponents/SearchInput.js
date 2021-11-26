import styled from 'styled-components';

import { White } from '../../../assets/colors/colors';

export const SearchWrapper = styled.div`
  width: 100%;

  .searchInput {
    max-width: 420px;
    width: 100%;
    height: 40px;
    font-size: 22px;
    padding: 12px 32px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    background: ${White};
    outline: none;
  }
`;
