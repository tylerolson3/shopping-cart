import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import { ContextProvider } from "./Context";
import App from "./App";

ReactDOM.render(
  <ContextProvider>
    <Router>
      <div className="container">
        <App />
      </div>
    </Router>
  </ContextProvider>,
  document.getElementById("root")
);
