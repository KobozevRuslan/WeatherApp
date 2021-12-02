import styled from 'styled-components';

export const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${(props) => (props.changeModal ? '1' : '0')};
  pointer-events: ${(props) => (props.changeModal ? 'all' : 'none')};
  transition: 0.2s;

  .modal_content {
    padding: 20px;
    border-radius: 12px;
    background: white;
    width: 400px;
    transform: ${(props) => (props.changeModal ? 'scale(1)' : 'scale(0.5)')};
    transition: 0.4s all;
    text-align: center;
  }
`;
