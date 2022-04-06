// @ts-nocheck

import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@emotion/react";
import { theme } from "./theme";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./store/store";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <ThemeProvider theme={theme}>
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>
);
