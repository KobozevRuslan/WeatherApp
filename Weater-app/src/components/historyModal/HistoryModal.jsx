import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { togglehModal, sortHandler } from '../../store/thunk/action/app';
import { languegeObject } from '../../store/data/languageObject';

import {
  blackTheme,
  lightTheme,
  HistoryModalWrapper,
} from './styledComponents/HistoryModal';

const HistoryModal = () => {
  const [orderAsc, setOrderAsc] = useState(true);

  const state = useSelector((state) => state.app);
  const { isModal, history, isBlackTheme, lang } = state;
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
          <h2>{languegeObject[lang].historyModalPage.header}</h2>
          <table className="history_modal_table">
            <tbody>
              <tr>
                <th>{languegeObject[lang].historyModalPage.city}</th>
                <th className="activeTh" onClick={onOrderChange}>
                  {languegeObject[lang].historyModalPage.temp}{' '}
                  {orderAsc ? '^' : 'v'}
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
            </tbody>
          </table>
        </div>
      </HistoryModalWrapper>
    </ThemeProvider>
  );
};

export default HistoryModal;
