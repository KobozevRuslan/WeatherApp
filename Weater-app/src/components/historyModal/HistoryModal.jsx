import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { togglehModal, sortHandler } from '../../store/thunk/action/app';

import {
  blackTheme,
  lightTheme,
  HistoryModalWrapper,
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
      <HistoryModalWrapper
        switchModal={isModal}
        onClick={() => dispatch(togglehModal())}
      >
        <div
          className="history_modal_content"
          onClick={(e) => e.stopPropagation()}
        >
          <h2>Search history</h2>
          <table className="history_modal_table">
            <tr>
              <th>City</th>
              <th className="activeTh" onClick={onOrderChange}>
                Weather
              </th>
            </tr>
            {history.map((items) => {
              return (
                <tr key={items.city}>
                  <td>{items.city}</td>
                  <td>{items.weather}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </HistoryModalWrapper>
    </ThemeProvider>
  );
};

export default HistoryModal;
