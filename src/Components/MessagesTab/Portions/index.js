import React, { Component } from "react";
import DropdownCard from "../../DropdownCard";
import { baseUrl } from "./../../../Api";
import { Spin } from "antd";
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
    navigator.onLine ? this.getData() : this.getCachedData();
  }
  getData = () => {
    var data = {
      studentId: this.state.studentId,
      offset: 0,
      count: 5
    };
    fetch(baseUrl + "dailyreport/portionTaken/countwise/", {
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
        localStorage.setItem("portions", JSON.stringify(value));
      });
  };

  getCachedData = () => {
    var data = localStorage.getItem("portions");
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
              <DropdownCard date={e.date} data={e.portionCoveredList} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
