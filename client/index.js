import React from 'react';
import { render } from 'react-dom';
import App from './components/App.js';
import { createRoot } from 'react-dom/client';

const domNode = document.getElementById('root');
const root = createRoot(domNode)
root.render(<App />);


console.log("Hello")





