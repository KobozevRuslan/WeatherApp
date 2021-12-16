import React from 'react';
import { useSelector } from 'react-redux';

import Loading from '../loading/Loading';
import CardError from '../errors/cardError/CardError';

const CheckWrapper = (props) => {
  const state = useSelector((state) => state.app);
  const { isLoading, isError } = state;
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <CardError />
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default CheckWrapper;
