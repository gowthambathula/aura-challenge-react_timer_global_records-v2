import { createStore, combineReducers, applyMiddleware } from "redux";
import { compose } from "./devTools";
import thunk from "redux-thunk";
import { records } from "../reducers";

// Return a store initializer
function init(reducers = {records}, state) {
  return createStore(
    combineReducers(reducers),
    state || {},
    compose(applyMiddleware(thunk))
  );
}

export { init };
