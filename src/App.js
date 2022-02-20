import React from "react";
import { Switch, Route } from "react-router-dom";
import styles from "./styles.css";
import Header from "./components/Header";
import Cart from "./routes/Cart";
import Photos from "./routes/Photos";

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/">
          <Photos />
        </Route>

        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
