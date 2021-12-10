import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from '../../store/thunk/action/app';

import { ModalWrapper } from './styledComponents/Modal';

const Modal = () => {
  const state = useSelector((state) => state.app);
  const { modal, history } = state;
  const dispatch = useDispatch();

  if (history.length >= 11) {
    history.shift();
  }

  return (
    <ModalWrapper changeModal={modal} onClick={() => dispatch(changeModal())}>
      <div
        className="modal_content"
        changeModal={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Search history</h2>
        <ul className="modal_list">
          {history.map((city) => {
            return <li className="modal_list_item">{city}</li>;
          })}
        </ul>
      </div>
    </ModalWrapper>
  );
};

export default Modal;
