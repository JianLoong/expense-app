import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import numeral from "numeral";

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div className="card mb-3 bg-light">
    {console.log(createdAt)}
    <Link
      className="card-header" 
      to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p className="card-body">
      {numeral(amount / 100).format('$0,0.00')}
      {` on `} 
      <strong>{moment(createdAt).format('MMMM Do, YYYY')}</strong>
    </p>
  </div>
);

export default ExpenseListItem;
