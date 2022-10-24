import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/HomeComponent'

import Element from './Components/NoteElements/CheckBoxComponent'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home/>

  </React.StrictMode>
);