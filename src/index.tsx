import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/js/src/collapse.js';
import 'bootstrap/js/src/modal';
import './app/assets/styles/custom.scss';

const container = document.getElementById('root');
if (container === null) throw new Error('Root container missing in index.html');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Home />
    <ToastContainer autoClose={3000} />
  </React.StrictMode>,
);
