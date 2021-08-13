// Globals
import React from "react";

// Components
import { Route, Switch } from "react-router-dom";

// Misc
import PropTypes from "prop-types";

// Component
function Routes({ routes }) {
  return (
    <Switch>
      {routes.map((route) => {
        const { component: Component, ...rest } = route;
        return (
          <Route key={rest.path || "404"} {...rest}>
            <Component />
          </Route>
        );
      })}
    </Switch>
  );
}

Routes.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      exact: PropTypes.bool,
      component: PropTypes.func.isRequired,
      path: PropTypes.string,
    })
  ).isRequired,
};

export { Routes };
