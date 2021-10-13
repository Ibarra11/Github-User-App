import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  ${normalize}

  body,html{
    height: 100%;
    width: 100%;
  }

  #root{
    height: 100%;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
