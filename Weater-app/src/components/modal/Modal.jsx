import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeModal } from '../../store/thunk/action/app';

import { ModalWrapper } from './styledComponents/Modal';

const Modal = () => {
  const modal = useSelector((state) => state.app.modal);
  const dispatch = useDispatch();

  return (
    <ModalWrapper changeModal={modal} onClick={() => dispatch(changeModal())}>
      <div
        className="modal_content"
        changeModal={modal}
        onClick={(e) => e.stopPropagation()}
      ></div>
    </ModalWrapper>
  );
};

export default Modal;
