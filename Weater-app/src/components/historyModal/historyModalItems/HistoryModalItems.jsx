import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { HistoryService } from '../../../service/HistoryService';

import { languegeObject } from '../../../store/data/languageObject';

const HistoryModalItems = () => {
  const [orderAsc, setOrderAsc] = useState(true);
  const [localeHistory, setLocaleHistory] = useState([]);
  const lang = useSelector((state) => state.app.lang);

  useEffect(() => {
    setLocaleHistory(HistoryService.getHistory());
  }, []);

  const onOrderChange = () => {
    setOrderAsc(!orderAsc);
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
          {localeHistory
            .sort((a, b) =>
              orderAsc ? a.weather - b.weather : b.weather - a.weather
            )
            .map((items, index) => {
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
