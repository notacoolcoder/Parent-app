import React, { Component } from "react";
import "./AbsentReport.css";
import { DatePicker } from "antd";
import moment from "moment";
import { baseUrl } from "./../../Api";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workingDays: 96,
      studentId: localStorage.getItem("active"),
      absentDays: 5,
      startValue: null,
      endValue: null,
      endOpen: false,
      studentId: localStorage.getItem("active"),
      reason: ""
    };
  }

  submitLeave() {
    console.log("hugu");

    var data = {
      studentId: this.state.studentId,
      startDate: this.state.startValue.toString(),
      endDate: this.state.endValue.toString(),
      reason: this.state.reason
    };
    fetch(baseUrl + "academic/applyLeave", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(value => {
        console.log("ab", value);

        if (value != null) {
          alert("absent marked");
        }
      });
  }

  disabledStartDate = startValue => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledEndDate = endValue => {
    const startValue = this.state.startValue;
    if (!endValue || !startValue) {
      return false;
    }
    return endValue.valueOf() <= startValue.valueOf();
  };

  onChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  onStartChange = value => {
    this.onChange("startValue", value);
  };

  onEndChange = value => {
    this.onChange("endValue", value);
  };
  onReasonChange = e => {
    this.setState({ reason: e.target.value });
    this.onChange("reason", e.target.value);
  };
  handleStartOpenChange = open => {
    if (!open) {
      this.setState({ endOpen: true });
    }
  };

  handleEndOpenChange = open => {
    this.setState({ endOpen: open });
  };

  render() {
    const { startValue, endValue, endOpen } = this.state;
    return (
      <div className="absent-report-main-container grey-color-bg">
        <div className="send-leave-container">
          <h1 className="total-absent">
            Total Absent{" "}
            <span className="absent-days">
              &nbsp;
              {this.state.absentDays}/{this.state.workingDays}
            </span>
          </h1>
          <button className="send-leave">Send Leave</button>
        </div>
        <div className="submit-leave-container">
          <div className="date-picker-container">
            <div className="date-picker-one-container">
              <h1>From</h1>
              <DatePicker
                className="date-picker date-picker-start"
                disabledDate={this.disabledStartDate}
                size="small"
                format="YYYY-MM-DD"
                value={startValue}
                placeholder="Current date"
                onChange={this.onStartChange}
                onOpenChange={this.handleStartOpenChange}
              />
            </div>
            <div className="date-picker-two-container">
              <h1>To</h1>
              <DatePicker
                size="small"
                className="date-picker date-picker-end"
                disabledDate={this.disabledEndDate}
                format="YYYY-MM-DD"
                value={endValue}
                placeholder="End date"
                onChange={this.onEndChange}
                open={endOpen}
                onOpenChange={this.handleEndOpenChange}
              />
            </div>
          </div>
          <textarea
            className="reason-for-leave"
            placeholder="Reason for leave..."
            onChange={this.onReasonChange}
          />
          <div className="submit-button-container">
            <button
              className="submit-button"
              onClick={this.submitLeave.bind(this)}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    );
  }
}
