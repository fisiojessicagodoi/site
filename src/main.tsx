import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';
import { posthogLogger } from './posthog';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

posthogLogger?.info('client_render_started', { entry_point: 'main' });

createRoot(root).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
