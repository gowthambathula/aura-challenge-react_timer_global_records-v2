// Globals
import "core-js/stable"; // Babel polyfills: https://github.com/zloirock/core-js#babel
import "regenerator-runtime/runtime"; // Babel polyfills: https://github.com/zloirock/core-js#babel
import React from "react";
import "./styles.scss"; // App-level styles

// Components
import { BrowserRouter, withRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Routes } from "Internal/components/Routes";

// Misc
import { init } from "Internal/store";
import ReactDOM from "react-dom";
import * as reducers from "Internal/reducers";
import { routes } from "Internal/routes";

// Component
function App() {
  const store = init(reducers);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes routes={routes} />
      </BrowserRouter>
    </Provider>
  );
}

ReactDOM.render(<App />, document.querySelector("#app"));
