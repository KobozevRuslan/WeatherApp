import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import { fetchData } from '../store/thunk/action/app';

import Header from './header/Header';
import Main from './main/Main';
import HistoryModal from './historyModal/HistoryModal';

import { MainAppWrapper } from './styledComponents/App';

import GlobalStyle, {
  blackTheme,
  lightTheme,
} from '../styledComponents/GlobalStyle';

const App = () => {
  const isBlackTheme = useSelector((state) => state.app.isBlackTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('London'));
  }, [dispatch]);

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <MainAppWrapper>
        <Header />
        <Main />
        <HistoryModal />
        <GlobalStyle blackTheme={isBlackTheme} />
      </MainAppWrapper>
    </ThemeProvider>
  );
};

export default App;
