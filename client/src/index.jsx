import React from "react";
import ReactDOM from "react-dom/client";
import './index.css';
import App from "./App.jsx";
import axios from 'axios';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error } from "./pages/Error/Error.jsx"


axios.defaults.baseURL = import.meta.env.VITE_APP_API || 'http://localhost:3001';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={ <App/> }/>
          <Route path="*" element={ <Error/> } />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
