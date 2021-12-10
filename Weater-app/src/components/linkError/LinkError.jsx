import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { languegeObject } from '../../store/data/languageObject';
import { PathMain } from '../routePath';

import {
  blackTheme,
  lightTheme,
  LinkErrorWrapper,
} from './styledComponents/LinkError';

const LinkError = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, lang } = state;

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <LinkErrorWrapper>
        <h2>404</h2>
        <Link to={PathMain}>{languegeObject[lang].link.back}</Link>
      </LinkErrorWrapper>
    </ThemeProvider>
  );
};

export default LinkError;
