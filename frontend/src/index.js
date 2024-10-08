import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for createRoot
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

// Get the root element from your HTML
const rootElement = document.getElementById('root');

// Create a root using createRoot
const root = ReactDOM.createRoot(rootElement);

// Render your app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);