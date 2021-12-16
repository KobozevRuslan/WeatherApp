import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { toggleModal } from '../../store/thunk/action/app';

import HistoryModalItems from './historyModalItems/HistoryModalItems';

import { HistoryModalWrapper } from './styledComponents/HistoryModal';
import { blackTheme, lightTheme } from '../styledComponents/App';

const HistoryModal = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { isHistoryModal, isBlackTheme } = state;

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <HistoryModalWrapper
        switchModal={isHistoryModal}
        onClick={() => dispatch(toggleModal())}
      >
        <HistoryModalItems />
      </HistoryModalWrapper>
    </ThemeProvider>
  );
};

export default HistoryModal;
