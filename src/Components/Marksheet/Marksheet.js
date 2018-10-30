import React, { Component } from "react";
import "./Marksheet.css";
import { Spin } from "antd";
import MarksheetCard from "../MarksheetCard";
import { baseUrl } from "./../../Api";

class Marksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
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

  getData = () => {
    var data = {
      studentId: this.state.studentId
    };
    fetch(baseUrl + "academic/markSheet/", {
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
        this.setState({ data: value, spin: false });
        localStorage.setItem("marksheet", JSON.stringify(value));
      });
  };

  getCachedData = () => {
    var data = localStorage.getItem("marksheet");
    this.setState({ data: JSON.parse(data) });
  };
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        {this.state.spin ? (
          <Spin />
        ) : (
          <div className="marksheet">
            {this.state.data.map(r => (
              <span>
                <MarksheetCard data={r} key={r.id} />
                <hr />
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
}

export default Marksheet;
