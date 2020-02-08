import React from 'react';
import ThemedButton from '../learning-context/themed-button';

const Toolbar = ({ changeTheme }) => (
  <ThemedButton onClick={changeTheme}>
    Change Theme
  </ThemedButton>
);

export default Toolbar;