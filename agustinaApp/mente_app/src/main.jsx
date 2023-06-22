import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { AuthProvider } from "./Context/AuthContext";
import { ChakraProvider } from "@chakra-ui/react";
import { LogDataProvider } from "./Context/LogContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <AuthProvider>
        <LogDataProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LogDataProvider>
      </AuthProvider>
    </ChakraProvider>
  </React.StrictMode>
);
