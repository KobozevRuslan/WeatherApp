import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from '../../store/thunk/action/app';

import { ModalWrapper } from './styledComponents/Modal';

const Modal = () => {
  const state = useSelector((state) => state.app);
  const { modal, history } = state;
  const dispatch = useDispatch();

  return (
    <ModalWrapper changeModal={modal} onClick={() => dispatch(changeModal())}>
      <div
        className="modal_content"
        changeModal={modal}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>Your history search</h2>
        {history
          .map((city) => {
            return (
              <ul>
                <li>{city}</li>
              </ul>
            );
          })
          .splice(0, 10)}
      </div>
    </ModalWrapper>
  );
};

export default Modal;
