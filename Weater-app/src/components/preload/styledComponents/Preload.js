import styled from 'styled-components';

import { Black } from '../../../assets/colors/colors';

export const PreloadWrapper = styled.div`
  width: 95px;
  height: 95px;
  margin: auto;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  :before {
    content: '';
    width: 95px;
    height: 10px;
    background: ${Black};
    opacity: 0.1;
    position: absolute;
    top: 100px;
    left: 0;
    border-radius: 50%;
    animation: shadow 0.445s linear infinite;
  }
  :after {
    content: '';
    width: 95px;
    height: 95px;
    background: rgb(26, 54, 104);
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 5px;
    animation: animate 0.445s linear infinite;
  }
  @keyframes animate {
    17% {
      border-bottom-right-radius: 3px;
    }
    25% {
      transform: translateY(9px) rotate(22.5deg);
    }
    50% {
      transform: translateY(18px) scale(1, 0.9) rotate(45deg);
      border-bottom-right-radius: 39px;
    }
    75% {
      transform: translateY(9px) rotate(67.5deg);
    }
    100% {
      transform: translateY(0) rotate(90deg);
    }
  }

  @keyframes shadow {
    0%,
    100% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1.2, 1);
    }
  }
`;
