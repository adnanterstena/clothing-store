import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import Navigation from "./Navigation";
import Shop from "./Components/Shop";
import Products from "./Components/Products";
import Home from "./Components/Home";

import store from "./storeShop";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="header"></div>
        <Navigation />
        <div className="container p-2">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Products" component={Products} />
            <Route path="/Shop" component={Shop} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
