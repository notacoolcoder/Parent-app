import React, { Component } from "react";
import "./AbsentReport.css";
import moment from "moment";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workingDays: 96,
      absentDays: 5,
      leave: [],
      currentDate: new Date()
    };
  }

  componentDidMount() {
    var data = {
      studentId: 20570
    };
    fetch("http://test.ssdiary.com/ssdiary/parentApp/academic/absentReport/", {
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
        this.setState({ leave: value });
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
              {this.state.absentDays}/{this.state.workingDays}
            </span>
          </h1>
          <button className="send-leave">Send Leave</button>
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
                <button className="cancel">Cancel</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
