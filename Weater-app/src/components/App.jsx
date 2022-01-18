import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { fetchData } from '../store/thunk/action/app';
import { PathError, PathMain, PathWeather } from './routePath';

import Header from './header/Header';
import SearchInput from './searchInput/SearchInput';
import MainCard from './mainCard/MainCard';
import LinkError from './errors/linkError/LinkError';
import HistoryModal from './historyModal/HistoryModal';

import { MainAppWrapper } from './styledComponents/App';

import GlobalStyle, {
  blackTheme,
  lightTheme,
} from '../styledComponents/GlobalStyle';

const App = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, isHistoryModalShow } = state;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData('London', true));
  }, []);

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <BrowserRouter>
        <MainAppWrapper>
          <Header />
          <Routes>
            <Route exact path={PathMain} element={<SearchInput />} />
            <Route path={PathWeather} element={<MainCard />} />
            <Route path={PathError} element={<LinkError />} />
          </Routes>
          {isHistoryModalShow ? <HistoryModal /> : null}
          <GlobalStyle />
        </MainAppWrapper>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
