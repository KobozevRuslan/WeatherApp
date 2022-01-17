import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { HistoryService } from '../../service/HistoryService';

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

import CustomBtn from './customBtn/CustomBtn';
import CustomImg from './customImg/CustomImg';

import dropIcon from '../../assets/image/dropIcon.png';
import russiaFlagIcon from '../../assets/image/russiaFlagIcon.png';
import unitedKingdomFlagIcon from '../../assets/image/unitedKingdomFlagIcon.png';

import { blackTheme, lightTheme } from '../styledComponents/App';
import { NavigationWrapper } from './styledComponents/Navigation';

const Navigation = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, lang } = state;
  const dispatch = useDispatch();

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <NavigationWrapper>
        <CustomBtn
          title={languegeObject[lang].historyBtn}
          onClick={() => dispatch(toggleModal())}
        />
        <CustomBtn
          title={languegeObject[lang].clearHistoryBtn}
          onClick={() => HistoryService.deleteHistory()}
        />
        <CustomImg
          src={dropIcon}
          alt="dropIcon"
          onClick={() => dispatch(toggleTheme())}
        />
        <CustomImg
          src={russiaFlagIcon}
          alt="russiaFlagIcon"
          onClick={() => dispatch(toggleLang(ruLang))}
        />
        <CustomImg
          src={unitedKingdomFlagIcon}
          alt="unitedKingdomFlagIcon"
          onClick={() => dispatch(toggleLang(engLang))}
        />
      </NavigationWrapper>
    </ThemeProvider>
  );
};

export default Navigation;
