import React, { Component } from "react";
import "./index.css";
import { Spin } from "antd";
import DropdownCard from "../../DropdownCard";
import { baseUrl } from "./../../../Api";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      spin: true,
      studentId: localStorage.getItem("active")
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
    var data = localStorage.getItem("classtest");
    this.setState({ data: JSON.parse(data) });
  };

  getData = () => {
    var data = {
      studentId: this.state.studentId,
      offset: 0,
      count: 5
    };
    fetch(baseUrl + "dailyreport/test/countwise/", {
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
        this.setState({ data: value, spin: false });
        localStorage.setItem("classtest", JSON.stringify(value));
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <div className="class-test">
        {this.state.spin ? (
          <Spin />
        ) : (
          <div>
            {this.state.data.map(e => (
              <div>
                <DropdownCard
                  date={e.date}
                  test={true}
                  data={e.classTestList}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
}
