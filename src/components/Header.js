import { NavLink, Link, Switch, BrowserRouter, Route } from "react-router-dom";
import React from "react";

const Header = () => (
  <div>
    <div className="container">
      <NavLink
        to="/"
        className="btn btn-primary"
        activeClassName="is-active"
        exact={true}
      >
        Dashboard
      </NavLink>
      <NavLink
        className="btn btn-primary"
        to="/create"
        activeClassName="is-active"
      >
        Create
      </NavLink>
      <NavLink
        className="btn btn-primary"
        to="/help"
        activeClassName="is-active"
      >
        Help
      </NavLink>
    </div>
    <br />
  </div>
);

export default Header;
