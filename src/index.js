import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Dienstleistungen } from './dienstleistungen';
import { Kooperationspartner } from './kooperationspartner';
import { Header } from './header';
import { Footer } from './footer';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import { Kundenbewertungen } from './kundenbewertung';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<App />} />
        <Route path="/dienstleistungen" element={<Dienstleistungen />} />
        <Route path="/kundenbewertungen" element={<Kundenbewertungen />} />
        <Route path="/kooperationspartner" element={<Kooperationspartner />} />
        <Route
          path="*"
          element={
            <Navigate to="/" />
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
