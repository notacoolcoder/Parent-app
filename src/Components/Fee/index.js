import React, { Component } from "react";
import "./index.css";
import FeeCard from "./FeeCard";
import { anotherBaseUrl } from "./../../Api";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    var that = this;
    var date = new Date();

    fetch(
      anotherBaseUrl +
        "loadFeePaymentStatusDetailsByStudent.html?studentId=771561&date=" +
        (date.getMonth() + 1) +
        "/" +
        date.getDate() +
        "/" +
        date.getFullYear()
    )
      .then(response => {
        console.log("res", response);

        return response.json();
      })
      .then(value => {
        console.log("------", value);
        that.setState({ data: value });
      })
      .catch(err => {
        console.log("err", err);
      });
  };

  render() {
    return (
      <div className="common-container">
        {this.state.data.map(item => (
          <FeeCard
            status={item.status}
            name={item.feeName}
            paid={item.paidAmount}
            paidDate={item.paidDate}
          />
        ))}
      </div>
    );
  }
}
