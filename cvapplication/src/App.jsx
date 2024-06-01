import { createGlobalStyle, styled } from "styled-components";
import "./stylus/index.styl";
import DMSans from "./assets/fonts/DMSans.ttf";
import DMSerif from "./assets/fonts/DMSerifDisplay.ttf";
import { Navigation } from "./components/Navigation";
import { Outlet } from "react-router-dom";
import React, { Suspense } from "react";

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSans});
  }

  @font-face {
    font-family: 'DM Serif Display';
    src: url(${DMSerif});
  }

  body {
    font-family: 'DM Sans';
  };

  a { 
    text-decoration: none;
    transition: 150ms ease-in;

    &:visited {
      color: black
    }

    &.active {
      font-weight: 600;
    }
  }

  * {
    // outline: 1px solid green
  }


`;

const ImagePreloader = styled.div`
  background-color: red;
  height: 100px;
  width: 100px;
`;

export const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 250px 250px 125px 125px 250px;
  // grid-template-rows: repeat(2, 1fr);

  padding-block-end: 64px;
  margin-block-start: 64px;
  width: 1024px;
  // height: 140svh;  
  margin-inline: auto;
`;

export default class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <GlobalFont />
        <Navigation />
        <Suspense fallback={ImagePreloader}>
          <Outlet />
        </Suspense>
      </MainContainer>
    );
  }
}
