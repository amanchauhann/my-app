import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import { DataContext, ContextData } from "./Contexts/data-context";

export {ContextData}

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataContext>
    <Router>
    <App />
    </Router>
    </DataContext>
    
    
  </React.StrictMode>,
  document.getElementById("root")
);
