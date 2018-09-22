import React, { Component } from "react";
import "./AbsentReport.css";
import moment from "moment";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workingDays: 96,
      absentDays: 5,
      leave: [
        {
          id: 714817,
          studentLeaveId: 0,
          absentDate: "2018-01-11",
          status: "Absent",
          reason: "I have fever."
        },
        {
          id: 714817,
          studentLeaveId: 0,
          absentDate: "2018-08-13",
          status: "Absent",
          reason: "I have fever."
        },
        {
          id: 708625,
          studentLeaveId: 0,
          absentDate: "2018-08-03",
          status: "Absent",
          reason: "Brothers Marriage"
        },
        {
          id: 702175,
          studentLeaveId: 0,
          absentDate: "2018-07-27",
          status: "Absent",
          reason: null
        },
        {
          id: 685739,
          studentLeaveId: 0,
          absentDate: "2019-06-30",
          status: "Absent",
          reason: null
        }
      ],
      currentDate: new Date()
    };
  }

  componentDidMount() {}

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
