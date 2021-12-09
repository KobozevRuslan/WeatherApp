import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { togglehModal, sortHandler } from '../../store/thunk/action/app';

import {
  blackTheme,
  lightTheme,
  ModalWrapper,
} from './styledComponents/HistoryModal';

const HistoryModal = () => {
  const [orderAsc, setOrderAsc] = useState(true);

  const state = useSelector((state) => state.app);
  const { isModal, history, isBlackTheme } = state;
  const dispatch = useDispatch();

  const onOrderChange = () => {
    setOrderAsc(!orderAsc);
    dispatch(sortHandler(orderAsc));
  };

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <ModalWrapper
        switchModal={isModal}
        onClick={() => dispatch(togglehModal())}
      >
        <div
          className="modal_content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Search history</h2>
          <div className="btn_wrapper">
            <button className="btn" onClick={onOrderChange}>
              Sort by weather
            </button>
          </div>
          {history.map((items) => {
            return (
              <ul key={items.city} className="modal_list">
                <li>{items.city}</li>
                <li>{items.weather}</li>
              </ul>
            );
          })}
        </div>
      </ModalWrapper>
    </ThemeProvider>
  );
};

export default HistoryModal;
