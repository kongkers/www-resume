import * as React from 'react';
import { hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './app.v2.js';
import './styles.css';

declare global {
  interface Window {
    __INITIAL_STATE__: string;
  }
}


const root = document.getElementById('root')!;

hydrateRoot(
  root,
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
