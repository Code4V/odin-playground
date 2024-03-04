import { Header } from './components/Header'
import { createGlobalStyle, styled } from 'styled-components';
import './stylus/index.styl'
import DMSans from './assets/fonts/DMSans.ttf';
import { Navigation } from './components/Navigation';
import { useState } from 'react';

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSans});
  }

  body {
    font-family: 'DM Sans';
  };

`;

const MainContainer = styled.main`
  display: grid;
  grid-template-columns: 250px 724px;
  width: 1024px;
  margin-inline: auto;
`


function App() {

  const [UseSetState, useSetState] = useState([ Header ]);

  const [RenderThis] = UseSetState;

  console.log(UseSetState, Header)

  return (
    <MainContainer>
      <GlobalFont />
      <Navigation />
      <Header />
      <RenderThis />
    </MainContainer>
  )
}

export default App
