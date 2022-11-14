import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import Landing from './sections/landing';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Landing />
  </React.StrictMode>
);

reportWebVitals();
