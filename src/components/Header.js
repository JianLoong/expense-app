import { NavLink, Link, Switch, BrowserRouter, Route } from "react-router-dom";
import React from "react";
import ExpenseSummary from "./ExpenseSummary";

const Header = () => (
  <div>
    <div className="container">
      <div className="jumbotron">
        <h1 className="display-3">Expensify</h1>

        <hr className="my-4" />
        <p className="lead">
          <NavLink
            to="/"
            className="btn btn-primary"
            activeClassName="is-active"
            exact={true}
          >
            Dashboard
          </NavLink>
          &nbsp;
          <NavLink
            className="btn btn-primary lg"
            to="/create"
            activeClassName="is-active"
          >
            Create an expense
          </NavLink>
        </p>
      </div>
    </div>
    <br />
  </div>
);

export default Header;
