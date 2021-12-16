import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import {
  toggleModal,
  toggleLang,
  toggleTheme,
} from '../../store/thunk/action/app';

import {
  engLang,
  languegeObject,
  ruLang,
} from '../../store/data/languageObject';

import dropIcon from '../../assets/image/dropIcon.png';
import russiaFlagIcon from '../../assets/image/russiaFlagIcon.png';
import unitedKingdomFlagIcon from '../../assets/image/unitedKingdomFlagIcon.png';

import { BtnWrapper } from './styledComponents/CustomButton';
import { blackTheme, lightTheme } from '../styledComponents/App';

const CustomButton = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, lang } = state;
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <BtnWrapper>
        <button className="btn" onClick={() => dispatch(toggleModal())}>
          {languegeObject[lang].historyBtn}
        </button>
        <div className="imageCircle">
          <img
            className="iconBtn"
            src={dropIcon}
            alt="dropIcon"
            onClick={() => dispatch(toggleTheme())}
          />
        </div>
        <div className="imageCircle">
          <img
            className="iconBtn"
            src={russiaFlagIcon}
            alt="russiaFlagIcon"
            onClick={() => dispatch(toggleLang(ruLang))}
          />
        </div>
        <div className="imageCircle">
          <img
            className="iconBtn"
            src={unitedKingdomFlagIcon}
            alt="unitedKingdomFlagIcon"
            onClick={() => dispatch(toggleLang(engLang))}
          />
        </div>
      </BtnWrapper>
    </ThemeProvider>
  );
};

export default CustomButton;
