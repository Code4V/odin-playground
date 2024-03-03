import { Header } from './components/Header'
import { createGlobalStyle } from 'styled-components';
import './stylus/index.styl'

const GlobalFont = createGlobalStyle`
  body {
    font-family: "DM Sans", sans-serif;
  }
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
