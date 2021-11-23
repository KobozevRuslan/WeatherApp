import React from 'react';
import { useTranslation } from 'react-i18next';

import russiaFlagIcon from '../../../../assets/image/russiaFlagIcon.png';
import unitedKingdomFlagIcon from '../../../../assets/image/unitedKingdomFlagIcon.png';

import { BtnWrapper } from './styledComponents/CustomButton';

const CustomButton = () => {
  const { i18n } = useTranslation();

  const changeLanguageHandler = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <BtnWrapper>
      <div className="imageCircle">
        <img
          src={russiaFlagIcon}
          alt="russiaFlagIcon"
          onClick={() => changeLanguageHandler('ru')}
        />
      </div>
      <div className="imageCircle">
        <img
          src={unitedKingdomFlagIcon}
          alt="unitedKingdomFlagIcon"
          onClick={() => changeLanguageHandler('en')}
        />
      </div>
    </BtnWrapper>
  );
};

export default CustomButton;
