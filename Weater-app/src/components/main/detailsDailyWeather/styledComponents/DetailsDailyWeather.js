import styled from 'styled-components';

import { Gray } from '../../../../assets/colors/colors';

export const MainDetailsDailyWeatherWrapper = styled.div`
  position: relative;
  max-width: 700px;
  width: 100%;
  border: none;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  padding: 15px 30px;
  height: 200px;

  .detailsDailyItems {
    display: flex;
    align-items: center;
    margin: 10px 0;

    .imageCircle {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      border-radius: 50%;
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    }

    img {
      width: 20px;
      padding: 5px 0;
    }

    p {
      max-width: 120px;
      width: 100%;
      text-transform: capitalize;
      margin: 0 10px;
      color: ${Gray};
    }

    span {
      position: relative;
      z-index: 99;
    }
  }

  .cloud_image {
    position: absolute;
    z-index: 2;
    top: 0;
    right: 0;
  }
`;
