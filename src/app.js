import React from 'react'
import ReactDOM from 'react-dom';
import { NavLink, Link, Switch, BrowserRouter, Route } from 'react-router-dom'
import AppRouter from './routers/AppRouter'
import "normalize.css/normalize.css";
import "./styles/styles.scss";


ReactDOM.render(<AppRouter />, document.getElementById("app"));
