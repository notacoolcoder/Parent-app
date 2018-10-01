import React, { Component } from "react";
import DropdownCard from "../../DropdownCard";
import { Dropdown } from "antd";
import { baseUrl } from "./../../../Api";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homework: []
    };
  }
  componentDidMount() {
    var data = {
      studentId: 20570,
      offset: 0,
      count: 5
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
        this.setState({ homework: value });
      });
  }
  render() {
    return (
      <div>
        {this.state.homework.map(e => (
          <DropdownCard date={e.date} data={e.homeworkList} />
        ))}
      </div>
    );
  }
}
