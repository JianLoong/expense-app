import { NavLink, Link, Switch, BrowserRouter, Route } from "react-router-dom";
import React from 'react'


const Header = () => (
    <div>
      <h1>Expense App</h1>
      <NavLink to="/" activeClassName="is-active" exact={true}>
        Dashboard
      </NavLink>
      <NavLink to="/create" activeClassName="is-active">
        Create
      </NavLink>
      <NavLink to="/edit" activeClassName="is-active">
        Edit Expense
      </NavLink>
      <NavLink to="/help" activeClassName="is-active">
        Help
      </NavLink>
    </div>
  );

  export default Header;