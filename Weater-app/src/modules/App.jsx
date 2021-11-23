import React, { Suspense } from 'react';

import Loading from './components/loading/Loading';
import Header from './components/header/Header';
import Main from './components/main/Main';

import { MainAppWrapper } from './styledComponents/App';
import GlobalStyle from '../styledComponents/GlobalStyle';

const App = () => {
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
