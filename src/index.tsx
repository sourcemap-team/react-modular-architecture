import React from 'react';
import {createRoot} from "react-dom/client";

// @ts-ignore
import App from './App.tsx';

const container = document.getElementById('root');

// Create a root.
const root = createRoot(container);

// Initial render
root.render(<App name="React modular" />);
