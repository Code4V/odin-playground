import { createGlobalStyle, styled } from 'styled-components';
import './stylus/index.styl'
import DMSans from './assets/fonts/DMSans.ttf';
import DMSerif from './assets/fonts/DMSerifDisplay.ttf';
import { Navigation } from './components/Navigation';
import { Outlet } from 'react-router-dom';

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

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 250px 724px;

  margin-block-start: 64px;
  width: 1024px;
  height: 140svh;
  margin-inline: auto;
`


function App() {
  return (
    <MainContainer>
      <GlobalFont />
      <Navigation />
      <Outlet />
    </MainContainer>
  )
}

export default App
