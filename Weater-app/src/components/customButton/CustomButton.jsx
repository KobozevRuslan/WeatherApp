import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  togglehModal,
  toggleLang,
  toggleTheme,
} from '../../store/thunk/action/app';

import dropIcon from '../../assets/image/dropIcon.png';
import russiaFlagIcon from '../../assets/image/russiaFlagIcon.png';
import unitedKingdomFlagIcon from '../../assets/image/unitedKingdomFlagIcon.png';

import { BtnWrapper } from './styledComponents/CustomButton';

const CustomButton = () => {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  return (
    <BtnWrapper switchTheme={theme}>
      <button className="btn" onClick={() => dispatch(togglehModal())}>
        history
      </button>
      <div className="imageCircle">
        <img
          src={dropIcon}
          alt="dropIcon"
          onClick={() => dispatch(toggleTheme())}
        />
      </div>
      <div className="imageCircle">
        <img
          src={russiaFlagIcon}
          alt="russiaFlagIcon"
          onClick={() => dispatch(toggleLang('ru'))}
        />
      </div>
      <div className="imageCircle">
        <img
          src={unitedKingdomFlagIcon}
          alt="unitedKingdomFlagIcon"
          onClick={() => dispatch(toggleLang('eng'))}
        />
      </div>
    </BtnWrapper>
  );
};

export default CustomButton;
