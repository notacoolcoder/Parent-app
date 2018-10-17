import React, { Component } from "react";
import "./index.css";
import DropdownCard from "../../DropdownCard";
import { baseUrl } from "./../../../Api";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {

    navigator.onLine ? this.getData() : this.getCachedData();
}
  getCachedData = () => {
    var data = localStorage.getItem("classtest");
    this.setState({ data: JSON.parse(data) });
  };

  getData = () => {
    var data = {
      studentId: 20570,
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
        this.setState({ data: value });
        localStorage.setItem("classtest", JSON.stringify(value));

      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <div>
        {this.state.data.map(e => (
          <DropdownCard date={e.date} test={true} data={e.classTestList} />
        ))}
      </div>
    );
  }
}
