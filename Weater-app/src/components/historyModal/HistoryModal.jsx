import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { togglehModal, sortHandler } from '../../store/thunk/action/app';

import { ModalWrapper } from './styledComponents/HistoryModal';

const HistoryModal = () => {
  const [orderAsc, setOrderAsc] = useState(true);

  const state = useSelector((state) => state.app);
  const { modal, history, theme } = state;
  const dispatch = useDispatch();

  const onOrderChange = () => {
    setOrderAsc(!orderAsc);
    dispatch(sortHandler(orderAsc));
  };

  return (
    <ModalWrapper
      switchTheme={theme}
      switchModal={modal}
      onClick={() => dispatch(togglehModal())}
    >
      <div
        className="modal_content"
        test={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Search history</h2>
        <button className="btn" onClick={onOrderChange}>
          Sort by weather
        </button>
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
  );
};

export default HistoryModal;
