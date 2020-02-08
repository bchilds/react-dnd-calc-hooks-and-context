import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ThemeContext, themes } from "./learning-context/theme-context";
import Toolbar from "./learning-context/toolbar";
import ThemedButton from './learning-context/themed-button';

class App extends React.Component {
  state = {
    theme: themes.light
  };

  toggleTheme = () => {
    this.setState({
      theme: this.state.theme === themes.light ? themes.dark : themes.light
    });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ThemeContext.Provider value={this.state.theme}>
            <div className="toolbar-wrapper">
              <Toolbar changeTheme={this.toggleTheme} />
            </div>
          </ThemeContext.Provider>
        </header>
        <body>
          <div>
            <ThemedButton>
              Some Default Text
            </ThemedButton>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
