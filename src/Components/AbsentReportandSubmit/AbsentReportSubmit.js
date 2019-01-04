import React, { Component } from "react";
import "./AbsentReport.css";
import { DatePicker, message } from "antd";
import moment from "moment";
import { baseUrl } from "./../../Api";
import { Redirect } from "react-router-dom";

message.config({ top: 100 , maxCount : 1 });

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
      reason: "",
      red: false ,
      leave : [],
    };
  }

  componentDidMount(){
    var data = {
      studentId : this.state.studentId
    }
    fetch( baseUrl + "academic/absentReport/",{
      method :"POST",
      body : JSON.stringify(data),
      headers : {
        "Content-Type" : "application/json"
      }
    })
    .then(response => {
      return response.json();
    })
    .then(value => {
      console.log(value);
      this.setState({leave : value})
    })
  }

  submitLeave() {
    message.config({ top: 100 , maxCount : 1 });
    var that = this;
    console.log("hugu");
    const { studentId, startValue, endValue, reason } = this.state;
    if (startValue == null || endValue == null || reason == "") {
      message.error("Please enter all the details!");
    } else {
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
          console.log("response",response);
          return response.json();
        })
        .then(value => {
          console.log("ab", value);
          message.success("Leave has been marked");
          that.setState({ red: true });
        })
        .catch(er => {
          message.error("Error");
        });
    }
  }

  disabledStartDate = startValue => {
    const endValue = this.state.endValue;
    if (!startValue || !endValue) {
      return false;
    }
    return startValue.valueOf() > endValue.valueOf();
  };

  disabledDate = (current) => {
    return current && current.valueOf() < Date.now();
  }

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
        <div className="submit-leave-container">
          <div className="date-picker-container">
            <div className="date-picker-one-container">
              <h1>From</h1>
              <DatePicker
                className="date-picker date-picker-start"
                disabledDate={this.disabledDate}
                size="small"
                format="DD-MM-YYYY"
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
                format="DD-MM-YYYY"
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
        {this.state.red ? <Redirect to="/absentreport" /> : null}
      </div>
    );
  }
}
