import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { languegeObject } from "../../../store/data/languageObject";
import { PathMain } from "../../routePath";

import { LinkErrorWrapper } from "./styledComponents/LinkError";
import { blackTheme, lightTheme } from "../../styledComponents/App";

const LinkError = () => {
  const state = useSelector((state) => state.app);
  const { isBlackTheme, lang } = state;
  const errorPortNumber = "404";

  return (
    <ThemeProvider theme={isBlackTheme ? blackTheme : lightTheme}>
      <LinkErrorWrapper>
        <h2>{errorPortNumber}</h2>
        <Link to={PathMain}>{languegeObject[lang].link.back}</Link>
      </LinkErrorWrapper>
    </ThemeProvider>
  );
};

export default LinkError;
