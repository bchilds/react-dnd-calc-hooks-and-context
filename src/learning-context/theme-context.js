import React from 'react';
export const themes = {
  light: {
    foregroundColor: "#000000",
    backgroundColor: "#eeeeee"
  },
  dark: {
    foregroundColor: "#ffffff",
    backgroundColor: "#222222"
  }
};

export const ThemeContext = React.createContext(
  themes.dark // default value
);