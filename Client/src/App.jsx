import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./Routes";

// Redux Store
import { Provider } from "react-redux";
import { store, persistor } from "./AppStore/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store} >
      <PersistGate persistor={persistor}>
        <Router>
          <Routing />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
