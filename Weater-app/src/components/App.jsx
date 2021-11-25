import React, { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchData } from '../store/thunk/action/app';

import Loading from './loading/Loading';
import Header from './header/Header';
import Main from './main/Main';

import { MainAppWrapper } from './styledComponents/App';
import GlobalStyle from '../styledComponents/GlobalStyle';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('London'));
  }, [dispatch]);

  return (
    <Suspense fallback={<Loading />}>
      <MainAppWrapper>
        <Header />
        <Main />
        <GlobalStyle />
      </MainAppWrapper>
    </Suspense>
  );
};

export default App;
