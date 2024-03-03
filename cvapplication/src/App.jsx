import { Header } from './components/Header'
import { createGlobalStyle } from 'styled-components';
import './stylus/index.styl'
import DMSans from './assets/fonts/DMSans.ttf';

const GlobalFont = createGlobalStyle`
  @font-face {
    font-family: 'DM Sans';
    src: url(${DMSans});
  }

  body {
    font-family: 'DM Sans';
  };

`


function App() {
  return (
    <div>
      <GlobalFont />
      <Header />
    </div>
  )
}

export default App
