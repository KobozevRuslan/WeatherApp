import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import {
  togglehModal,
  toggleLang,
  toggleTheme,
} from '../../store/thunk/action/app';
import { languegeObject } from '../../store/data/languageObject';

import dropIcon from '../../assets/image/dropIcon.png';
import russiaFlagIcon from '../../assets/image/russiaFlagIcon.png';
import unitedKingdomFlagIcon from '../../assets/image/unitedKingdomFlagIcon.png';

import {
  blackTheme,
  lightTheme,
  BtnWrapper,
} from './styledComponents/CustomButton';

const CustomButton = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, lang } = state;
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <BtnWrapper>
        <button className="btn" onClick={() => dispatch(togglehModal())}>
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
            onClick={() => dispatch(toggleLang('ru'))}
          />
        </div>
        <div className="imageCircle">
          <img
            className="iconBtn"
            src={unitedKingdomFlagIcon}
            alt="unitedKingdomFlagIcon"
            onClick={() => dispatch(toggleLang('eng'))}
          />
        </div>
      </BtnWrapper>
    </ThemeProvider>
  );
};

export default CustomButton;
