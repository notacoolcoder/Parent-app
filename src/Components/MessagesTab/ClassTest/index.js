import React, { Component } from "react";
import "./index.css";
import DropdownCard from "../../DropdownCard";
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
    fetch(
      "http://test.ssdiary.com/ssdiary/parentApp/dailyreport/test/countwise/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
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
          <DropdownCard date={e.date} test={true} data={e.classTestList} />
        ))}
      </div>
    );
  }
}
