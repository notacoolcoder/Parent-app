import React, { Component } from "react";
import "./index.css";
import { Icon } from "antd";
import ExamCard from "./ExamCard";
import { baseUrl } from "./../../../Api";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      visible: "none",
      display: true,
      studentId: localStorage.getItem("avtive")
    };
  }

  componentDidMount() {
    var data = {
      studentId: this.state.studentId
    };
    fetch(baseUrl + "academic/examTimetable/", {
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

        this.setState({ data: value });
      });
  }
  onHandle = () => {
    this.setState({ visible: "inline" });
    this.setState({ display: !this.state.display });
  };
  onHandleClose = () => {
    this.setState({ visible: "none" });
    this.setState({ display: !this.state.display });
  };

  render() {
    return (
      <div className="common-container">
        {this.state.data.map(item => (
          <div
            className="common-card exam-shadow"
            style={{
              width: "350px",
              height: "auto",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h2>{item.examTypeName}</h2>
              {this.state.display ? (
                <Icon
                  type="caret-down"
                  onClick={this.onHandle}
                  theme="outlined"
                />
              ) : (
                <Icon
                  type="caret-up"
                  onClick={this.onHandleClose}
                  theme="outlined"
                />
              )}
            </div>
            <div style={{ display: this.state.visible }}>
              {item.examtimetableList.map(item1 => (
                <ExamCard
                  examDate={item1.examDate}
                  examDay={item1.examDay}
                  examSubject={item1.examSubject}
                  examStartTime={item1.examStartTime}
                  examEndTime={item1.examEndTime}
                  remarks={item1.remarks}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
}
