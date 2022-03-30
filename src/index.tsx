import { initialize } from "react-ga";

const TRACKING_ID = "INSERT-YOUR-ID-HERE";
initialize(TRACKING_ID);

import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./constants";
import "./index.css";
import App from "./app";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
