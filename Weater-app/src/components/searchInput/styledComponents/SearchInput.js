import styled from 'styled-components';

import {
  Black,
  DodgerBlue,
  LightBlack,
  White,
} from '../../../assets/colors/colors';

export const SearchWrapper = styled.div`
  width: 100%;
  position: relative;

  .searchInput {
    max-width: 420px;
    width: 100%;
    height: 40px;
    font-size: 22px;
    padding: 12px 32px;
    border: none;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    transition: all 0.3s ease-in;
    color: ${(props) => (props.blackTheme ? `${White}` : `${Black}`)};
    background: ${(props) =>
      props.blackTheme ? `${LightBlack}` : `${White}`};
    outline: none;
  }

  .autocomplete {
    position: absolute;
    left: 0;
    top: 50px;
    max-width: 420px;
    width: 100%;
    background: white;
    list-style: none;
    margin: 0;
    padding: 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    max-height: 240px;
    height: auto;
    overflow: auto;
    border-radius: 20px;

    .autocompelete_item {
      padding: 10px;
      :hover {
        color: white;
        background: ${(props) =>
          props.blackTheme ? `${LightBlack}` : `${DodgerBlue}`};
        cursor: pointer;
        transition: cubic-bezier(1, 0, 0, 1) 0.3s all;
      }
    }
  }
`;
