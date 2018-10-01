import React, { Component } from "react";
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
    var data = {
      studentId: 20570,
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
        this.setState({ data: value });
      });
  }

  render() {
    return (
      <div>
        {this.state.data.map(e => (
          <DropdownCard date={e.date} data={e.portionCoveredList} />
        ))}
      </div>
    );
  }
}
