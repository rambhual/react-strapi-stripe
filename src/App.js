import React from "react";
import Nav from "./components/nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./home";
import { Contact } from "./contact";
import { Product } from "./product";
import { About } from "./about";
import { News } from "./news";
function App() {
  return (
    <BrowserRouter>
      <Nav />
      <div className="container mt-5">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Product} />
          <Route path="/news" component={News} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
