import styled from 'styled-components';

import { DodgerBlue } from '../../../../assets/colors/colors';

export const HeaderWrapper = styled.div`
  margin-top: 30px;

  .weatherHeaderItems {
    display: flex;
    align-items: center;
  }

  h1 {
    margin-left: 20px;
    color: ${DodgerBlue};
  }

  img {
    width: 70px;
  }

  .weatherItems {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
