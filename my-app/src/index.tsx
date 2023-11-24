import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './pages/Landing/App';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Summary from './pages/Summary/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/launches/:id" element={<Summary />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);


