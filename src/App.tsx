import GlobalStyle from "./components/styles/Global";
import { ThemeProvider } from "styled-components";
import Nav from "./components/Nav";
import Intro from "./components/Intro";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

const theme = {
  fonts: {
    body: '"DM Serif Display", serif',
    heading: '"Karla", sans-serif',
  },
  colors: {
    darkViolet: '#2d2640',
    grayishBlue: '#95a9c6',
    veryDarkViolet: '#2b272f',
    darkGrayishViolet: '#837d87',
    veryLightGray: '#fafafa'
  }
}

function App() {
  return (
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Nav />
      <Intro />
      <Main />
      <About />
      <Footer />
    </ThemeProvider>
    </>
  )
}

export default App
