import { compose } from "redux";

// Devtools
const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export { composer as compose };
