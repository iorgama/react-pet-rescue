import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/globalStyle";
import { defaultTheme } from "./GlobalStyles/theme";
import { Router } from "./Router";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router/>
    </ThemeProvider>
  );
}

export default App;
