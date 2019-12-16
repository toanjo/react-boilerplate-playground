import React from 'react';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './utils/styles.global.js';
import Welcome from './components/Welcome';

import {
  Switch,
  Route
} from "react-router-dom";

function App() {

  const currentTheme = useSelector(state => state.themeReducer.theme)

  const Theme = ({ children }) => (
    <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>
  );

  return (
    <Theme>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
        </Switch>
      </div>
      <GlobalStyle />
    </Theme>
  );
}

export default App;
