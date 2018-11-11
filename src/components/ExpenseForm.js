import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// This import needed to fix LTR issue
import "react-dates/initialize";

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: props.expense ? props.expense.description : "",
      note: props.expense ? props.expense.note : "",
      amount: props.expense ? (props.expense.amount / 100).toString() : "",
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ""
    };
  }

  onDescriptionChange = e => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = e => {
    const note = e.target.value;
    console.log(note);
    this.setState(() => ({ note }));
  };

  onAmountChange = e => {
    const amount = e.target.value;
    // Using regular expression
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
      this.setState(() => ({ amount }));
  };

  onDateChange = createdAt => {
    console.log(createdAt);
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };

  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };

  onSubmit = e => {
    console.log(e);
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      //Error message
      this.setState(() => ({
        error: "Please enter a description and amount"
      }));
    } else {
      this.setState(() => ({
        error: ""
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };

  render() {
    return (
      <div className="">
        <div>
          {this.state.error && (
            <div className="alert alert-warning">{this.state.error}</div>
          )}
        </div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="descriptionInput">Description</label>
            <input
              className="form-control"
              type="text"
              placeholder="Description"
              value={this.state.description}
              autoFocus
              onChange={this.onDescriptionChange}
            />
            <small>This will appear on your statement</small>
          </div>
          <div className="form-group">
            <label htmlFor="descriptionInput">Amount</label>
            <input
              type="text"
              className="form-control"
              value={this.state.amount}
              onChange={this.onAmountChange}
              placeholder="Amount"
            />
          </div>

          <div className="form-group">
            <label htmlFor="descriptionInput">Date</label>
            <br />
            <SingleDatePicker
              displayFormat="DD MMM YYYY"
              date={this.state.createdAt} // momentPropTypes.momentObj or null
              onDateChange={this.onDateChange} // PropTypes.func.isRequired
              focused={this.state.calendarFocused} // PropTypes.bool
              onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
              numberOfMonths={1}
              isOutsideRange={day => false} //Everyday is OK
              id="your_unique_id" // PropTypes.string.isRequired,
            />
          </div>

          <div className="form-group">
            <label htmlFor="descriptionInput">Note</label>
            <textarea
              className="form-control"
              value={this.state.note}
              placeholder="Add a note (optional)"
              onChange={this.onNoteChange}
            />
          </div>

          <button className="btn btn-primary">Confirm</button>
        </form>
      </div>
    );
  }
}
