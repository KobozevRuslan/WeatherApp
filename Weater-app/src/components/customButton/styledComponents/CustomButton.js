import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;

  .imageCircle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    border-radius: 50%;
    margin-left: 15px;
    transition: all 0.2s ease;
    :hover {
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.25);
    }
    img {
      width: 30px;
      padding: 5px 0;
      cursor: pointer;
    }
  }
`;
