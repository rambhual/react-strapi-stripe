import React from "react";
import ReactDOM from "react-dom";
import "./styles/bulma.min.css";
import "./index.css";
import App from "./App";
import ProductProvider from "./context/product.context";
import { UserProvider } from "./context/user.context";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <ProductProvider>
    <UserProvider>
      <App />
    </UserProvider>
  </ProductProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
