import React from 'react';
import { useSelector } from 'react-redux';

import Preload from '../preload/Preload';
import CardError from '../errors/cardError/CardError';

const LoadingWrapper = (props) => {
  const state = useSelector((state) => state.app);
  const { isLoading, isError } = state;
  return (
    <>
      {isLoading ? (
        <Preload />
      ) : isError ? (
        <CardError />
      ) : (
        <>{props.children}</>
      )}
    </>
  );
};

export default LoadingWrapper;
