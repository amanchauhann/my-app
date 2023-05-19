import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

import { BrowserRouter as Router } from "react-router-dom";
import { DataContext, ContextData } from "./Contexts/data-context";
import { AuthProvider, AuthContext } from "./Contexts/auth-context";

export {ContextData, AuthContext}

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <DataContext>
      <AuthProvider>
      <Router>
    <App />
    </Router>
      </AuthProvider>
    </DataContext>
    
    
  </React.StrictMode>,
  document.getElementById("root")
);
