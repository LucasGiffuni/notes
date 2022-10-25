import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/HomeComponent'

import Element from './Components/NoteElements/ProgressionBarComponent'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />

  </React.StrictMode>
);