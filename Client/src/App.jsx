import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routes";
import { Provider } from "react-redux";
import store from "./AppStore/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routing />
      </Router>
    </Provider>
  );
}

export default App;
