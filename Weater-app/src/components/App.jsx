import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData } from '../store/thunk/action/app';

import Header from './header/Header';
import Main from './main/Main';
import HistoryModal from './historyModal/HistoryModal';

import { MainAppWrapper } from './styledComponents/App';
import GlobalStyle from '../styledComponents/GlobalStyle';

const App = () => {
  const theme = useSelector((state) => state.app.theme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('London'));
  }, [dispatch]);

  return (
    <MainAppWrapper>
      <Header />
      <Main />
      <HistoryModal />
      <GlobalStyle switchTheme={theme} />
    </MainAppWrapper>
  );
};

export default App;
