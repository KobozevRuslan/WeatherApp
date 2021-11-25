import React from 'react';
import { useDispatch } from 'react-redux';

import { changeLang } from '../../store/thunk/action/app';

import russiaFlagIcon from '../../assets/image/russiaFlagIcon.png';
import unitedKingdomFlagIcon from '../../assets/image/unitedKingdomFlagIcon.png';

import { BtnWrapper } from './styledComponents/CustomButton';

const CustomButton = () => {
  const dispatch = useDispatch();

  return (
    <BtnWrapper>
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
