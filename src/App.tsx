import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyles/globalStyle";
import { defaultTheme } from "./GlobalStyles/theme";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { ListPets } from "./pages/ListPets";
import { CreatePets } from "./pages/CreatePets";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/sobre">
            <About/>
          </Route>
          <Route path="/lista-pets">
            <ListPets/>
          </Route>          
          <Route path="/cadastra-pets">
            <CreatePets/>
          </Route>
        </Switch>        
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
