import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { fetchData } from '../store/thunk/action/app';
import { PathError, PathMain, PathWeather } from './routePath';

import Header from './header/Header';
import Main from './main/Main';
import SearchInput from './searchInput/SearchInput';
import HistoryModal from './historyModal/HistoryModal';

import { MainAppWrapper } from './styledComponents/App';

import GlobalStyle, {
  blackTheme,
  lightTheme,
} from '../styledComponents/GlobalStyle';
import LinkError from './linkError/LinkError';

const App = () => {
  const isBlackTheme = useSelector((state) => state.app.isBlackTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('London'));
  }, [dispatch]);

  return (
    <BrowserRouter>
      <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
        <MainAppWrapper>
          <Header />
          <Routes>
            <Route exact path={PathMain} element={<SearchInput />} />
            <Route path={PathWeather} element={<Main />} />
            <Route path={PathError} element={<LinkError />} />
          </Routes>
          <HistoryModal />
          <GlobalStyle />
        </MainAppWrapper>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
