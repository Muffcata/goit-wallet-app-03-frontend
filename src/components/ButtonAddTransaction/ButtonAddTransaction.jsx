import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import { useDispatch } from 'react-redux';
import React from 'react';
import { useSelector } from 'react-redux';
import { setIsModalAddTransactionOpen } from 'redux/slices/globalSlice';
// import TransactionModal from 'components/TransactionModal/TransactionModal';
import AddTransactionModal from 'components/AddTransactionModal/AddTransactionModal';

const StyledButton = styled.button`
  position: sticky;
  align-self: flex-end;
  z-index: 99;
  right: 20px;
  bottom: 20px;
  background: transparent;
  cursor: pointer;
  transition: transform 0.5s;
  width: 44px;
  height: 44px;
  border-radius: 100%;
  border-style: none;
  box-shadow: 0px 3px 10px rgba(36, 204, 167, 0.8);
  overflow: hidden;

  &:hover {
    transform: scale(1.2);
  }

  & svg {
    width: 79px;
    height: 79px;
    position: absolute;
    top: 67%;
    left: 22px;
    transform: translate(-50%, -50%);
    fill: var(--color-brand-secondary);
  }

  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    position: absolute;
    right: 40px;
    bottom: 40px;
  }
`;

export const ButtonAddTransaction = () => {
  const dispatch = useDispatch();
  const isModalAddTransactionOpen = useSelector(state => state.global.isModalAddTransactionOpen);

  const handleOpenModal = () => {
    dispatch(setIsModalAddTransactionOpen(true));
    if (typeof window != 'undefined' && window.document) {
      document.body.style.overflow = 'hidden';
    }
  };

  return (
    <>
      <StyledButton onClick={handleOpenModal}>
        <Icon icon="icon__btn-plus" />
      </StyledButton>
      {isModalAddTransactionOpen && <AddTransactionModal />}
    </>
  );
};
export default ButtonAddTransaction;
