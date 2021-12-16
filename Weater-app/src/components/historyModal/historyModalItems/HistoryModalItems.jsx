import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { languegeObject } from '../../../store/data/languageObject';
import { sortHandler } from '../../../store/thunk/action/app';

const HistoryModalItems = () => {
  const [orderAsc, setOrderAsc] = useState(true);

  const dispatch = useDispatch();
  const state = useSelector((state) => state.app);
  const { history, lang } = state;

  const onOrderChange = () => {
    setOrderAsc(!orderAsc);
    dispatch(sortHandler(orderAsc));
  };

  return (
    <div className="history_modal_content" onClick={(e) => e.stopPropagation()}>
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
          {history.map((items, index) => {
            return (
              <tr key={index}>
                <td>{items.city}</td>
                <td>{items.weather}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default HistoryModalItems;
