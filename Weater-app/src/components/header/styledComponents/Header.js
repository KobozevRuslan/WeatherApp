import styled from 'styled-components';

import { DodgerBlue } from '../../../assets/colors/colors';

export const MainWeatherHeaderWrapper = styled.div`
  margin: 30px 0;

  .weatherHeaderItems {
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 70px;
    }
  }

  h1 {
    margin-left: 20px;
    color: ${DodgerBlue};
    cursor: default;
  }
`;
