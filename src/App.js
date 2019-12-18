import React, { Suspense, lazy } from "react";
import Nav from "./components/nav";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Home } from "./home";
import { Product } from "./product";
import { About } from "./about";
import { User } from "./user";
import UserDetail from "./user/pages/user.detail";
import { News, Contact } from "./routes";
function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Please wait while loading...</div>}>
        <Nav />
        <div className="container mt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Product} />
            <Route path="/news" component={News} />
            <Route path="/about" component={About} />
            <Route exact path="/users" component={User} />
            <Route path="/users/:id" children={<UserDetail></UserDetail>} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
