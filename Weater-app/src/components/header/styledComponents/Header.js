import styled from 'styled-components';

import { DodgerBlue } from '../../../assets/colors/colors';

export const MainWeatherHeaderWrapper = styled.div`
  margin-top: 30px;

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
  }

  .weatherItems {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
