import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchData } from '../store/thunk/action/app';

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
    <MainAppWrapper>
      <Header />
      <Main />
      <GlobalStyle />
    </MainAppWrapper>
  );
};

export default App;
