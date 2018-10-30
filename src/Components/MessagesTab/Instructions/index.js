import React, { Component } from "react";
import "./index.css";
import DropdownCard from "../../DropdownCard";
import { baseUrl } from "./../../../Api";
import { Spin } from "antd";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
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

  getData = () => {
    var data = {
      studentId: this.state.studentId,
      offset: 0,
      count: 5
    };
    fetch(baseUrl + "dailyreport/instructions/countwise/", {
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
        localStorage.setItem("instructions", JSON.stringify(value));
        this.setState({ data: value, spin: false });
      });
  };

  getCachedData = () => {
    var data = localStorage.getItem("instructions");
    this.setState({ data: JSON.parse(data) });
  };

  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {this.state.spin ? (
          <Spin />
        ) : (
          <div>
            {this.state.data.map(e => (
              <DropdownCard date={e.date} data={e.instructionList} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
