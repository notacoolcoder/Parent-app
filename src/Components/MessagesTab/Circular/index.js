import React, { Component } from "react";
import ExpandableCard from "../../ExpandableCard/ExpandableCard";
import "./index.css";
import { baseUrl } from "./../../../Api";
import { Spin } from "antd";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      spin: true,
      date: ""
    };
  }
  componentDidMount() {
    this.setState({
      date: new Date().toString().slice(0, 15)
    });
    //this.setState({ data: this.getData() });
    navigator.onLine ? this.getData() : this.getCachedData();
  }

  getCachedData = () => {
    var data = localStorage.getItem("circular");
    this.setState({ data: JSON.parse(data) });
  };

  getData = () => {
    var data = {
      phoneNumber: localStorage.getItem("phone"),
      offset: 0,
      count: 5,
      schoolId: 9
    };
    console.log("ethiii");

    fetch(baseUrl + "circulars/countwise/", {
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
        console.log("------", value);

        this.setState({ data: value, spin: false });
        localStorage.setItem("circular", JSON.stringify(value));
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  render() {
    return (
      <div className="circular-main">
        {this.state.spin ? (
          <Spin />
        ) : (
          <div>
            {this.state.data.map(q => (
              <span>
                <div className="circular-date">{q.date}</div>
                <div className="circulars">
                  {q.circularList.map(t => (
                    <ExpandableCard message={t.message} />
                  ))}
                </div>
              </span>
            ))}
          </div>
        )}
      </div>
    );
  }
}
