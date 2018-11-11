import React from "react";
import { connect } from "react-redux";
import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from "../actions/filters";
import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
// This import needed to fix LTR issue
import "react-dates/initialize";

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  };

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = calendarFocused => {
    this.setState(() => ({ calendarFocused }));
  };

  render() {
    return (
      <div className="col-md-12">
        <div className="form-group">
          <label htmlFor="descriptionInput">Description</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter search query"
            value={this.props.filters.text}
            onChange={e => {
              this.props.dispatch(setTextFilter(e.target.value));
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="descriptionInput">Sort By</label>
          <select
            className="custom-select"
            value={this.props.filters.sortBy}
            onChange={e => {
              if (e.target.value === "date") {
                this.props.dispatch(sortByDate());
              } else if (e.target.value === "amount") {
                this.props.dispatch(sortByAmount());
              }
            }}
          >
            <option value="date">Date</option>
            <option value="amount">Amount</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="descriptionInput">Date Range</label>
          <br />
          <DateRangePicker
            displayFormat="DD MMM YYYY"
            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
            startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
            endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
            focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired,
            numberOfMonths={1}
            isOutsideRange={() => false}
            showClearDates={true}
            readOnly={true}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
