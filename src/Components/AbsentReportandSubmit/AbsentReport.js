import React, { Component } from "react";
import "./AbsentReport.css";
import moment from "moment";
import { Link } from "react-router-dom";

import { baseUrl } from "./../../Api";
import { message } from "antd";

message.config({ top: 100 });

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workingDays: 96,
      absentDays: "",
      leave: [],
      currentDate: new Date(),

      studentId: localStorage.getItem("active")
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    var data = {
      studentId: this.state.studentId
    };
    fetch(baseUrl + "academic/absentReport/", {
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
        console.log(value);
        this.setState({ leave: value, absentDays: value.length });
      });
  };

  onLeaveCancel(id) {
    var that = this;
    var data = {
      studentLeaveId: id
    };
    fetch(baseUrl + "academic/cancelLeave", {
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
        message.success("Leave has been cancelled");
        that.getData();
      });
  }

  render() {
    return (
      <div className="absent-report-main-container">
        <div className="send-leave-container">
          <h1 className="total-absent">
            Total Absent{" "}
            <span className="absent-days">
              &nbsp;
              {this.state.absentDays}
            </span>
          </h1>
          <Link to="/absentreportsubmit">
            <button className="send-leave">Send Leave</button>
          </Link>
        </div>

        <div className="leave-list-container">
          {this.state.leave.map((leave, index) => {
            const leaveDate = new Date(leave.absentDate);
            return leaveDate < this.state.currentDate ? (
              <div key={index} className="leave-list-item">
                <div className="date">
                  <h1>
                    {moment(leave.absentDate).format("MMM")}
                    <br />
                    <span>{moment(leave.absentDate).format("D")}</span>
                  </h1>
                </div>
                <div className="reason">
                  <h1 className="leave">
                    Leave
                    <br />
                    <span>
                      {leave.reason ? leave.reason : "No reason specified"}
                    </span>
                  </h1>
                </div>
              </div>
            ) : (
              <div key={index} className="leave-list-item">
                <div className="date future">
                  <h1>
                    {moment(leave.absentDate).format("MMM")}
                    <br />
                    <span>{moment(leave.absentDate).format("D")}</span>
                  </h1>
                </div>
                <div className="reason">
                  <h1 className="leave">
                    Leave
                    <br />
                    <span>
                      {leave.reason ? leave.reason : "No reason specified"}
                    </span>
                  </h1>
                </div>
                <button
                  className="cancel"
                  onClick={this.onLeaveCancel.bind(this, leave.studentLeaveId)}
                >
                  Cancel
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
