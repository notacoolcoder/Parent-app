import React, { Component } from "react";
import DropdownCard from "../../DropdownCard";
import { Dropdown } from "antd";
import { baseUrl } from "./../../../Api";
import { Spin } from "antd";
import "./index.css";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homework: [],
      studentId: localStorage.getItem("active"),
      spin: true
    };
  }
  componentDidMount() {
    window.addEventListener("storage", e => {
      this.setState({ studentId: localStorage.getItem("active") });
      this.getData();
    });
    navigator.onLine ? this.getData() : this.getCachedData();
  }

  getCachedData = () => {
    var data = localStorage.getItem("homework");
    this.setState({ homework: JSON.parse(data) });
  };

  getData = () => {
    var data = {
      studentId: this.state.studentId,
      offset: 0,
      count: 10
    };
    fetch(baseUrl + "dailyreport/homeWork/countwise/", {
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
        this.setState({ homework: value, spin: false });
        localStorage.setItem("homework", JSON.stringify(value));
      });
  };
  render() {
    return (
      <div className="message-homework">
        {this.state.spin ? (
          <Spin />
        ) : (
          <div>
            {this.state.homework.map(e => (
              <DropdownCard date={e.date} data={e.homeworkList} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
