import React from 'react';
import Routes from './router';
import { GlobalStyle } from './AppStyle';

function App() {
  document.title = 'Design Patterns';
  return (
    <>
      <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
