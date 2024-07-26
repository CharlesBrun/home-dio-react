import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalStyle } from './styles/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle/>
    <App />
  </React.StrictMode>
);

//TODO
//FIGMA - https://www.figma.com/design/fvjQQNtqaUdpuNixvCZVav/DIO-CLONE?node-id=1-2&t=nnbOP5RpYuS92Z4H-0