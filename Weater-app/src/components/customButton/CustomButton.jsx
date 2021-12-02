import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  changeLang,
  changeModal,
  changeTheme,
} from '../../store/thunk/action/app';

import dropIcon from '../../assets/image/dropIcon.png';
import russiaFlagIcon from '../../assets/image/russiaFlagIcon.png';
import unitedKingdomFlagIcon from '../../assets/image/unitedKingdomFlagIcon.png';

import { BtnWrapper } from './styledComponents/CustomButton';

const CustomButton = () => {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();
  return (
    <BtnWrapper changeTheme={theme}>
      <div className="imageCircle">
        <button onClick={() => dispatch(changeModal())}>modal</button>
      </div>
      <div className="imageCircle">
        <img
          src={dropIcon}
          alt="dropIcon"
          onClick={() => dispatch(changeTheme())}
        />
      </div>
      <div className="imageCircle">
        <img
          src={russiaFlagIcon}
          alt="russiaFlagIcon"
          onClick={() => dispatch(changeLang('ru'))}
        />
      </div>
      <div className="imageCircle">
        <img
          src={unitedKingdomFlagIcon}
          alt="unitedKingdomFlagIcon"
          onClick={() => dispatch(changeLang('eng'))}
        />
      </div>
    </BtnWrapper>
  );
};

export default CustomButton;
