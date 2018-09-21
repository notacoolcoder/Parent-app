import React, { Component } from "react";
import "./index.css";
import { DatePicker } from "antd";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date().toString().slice(0, 15),
      chapter: "21,22",
      pageNo: "121,131",
      Note: "sadsadasdsadas",
      testDate: new Date().toString().slice(0, 15)
    };
  }

  componentDidMount() {}
  onDtaeChange(date, dateString) {
    console.log(dateString);
  }
  render() {
    return (
      <div className="daily-report">
        <DatePicker
          size="small"
          onChange={this.onDtaeChange.bind(this)}
          style={{ width: "120px", margin: "4px" }}
        />
        <div className="portiontaken">
          <h3>Protions Taken</h3>
          <h4>Malyalam</h4>
          <p>
            Chapter:
            {this.state.chapter}
          </p>
          <p>
            PageNo:
            {this.state.pageNo}
          </p>
          <p>
            Note:
            {this.state.Note}
          </p>
        </div>
        <div className="portiontaken">
          <h3>Homework</h3>
          <h4>English</h4>
          <p>
            Chapter:
            {this.state.chapter}
          </p>
          <p>
            PageNo:
            {this.state.pageNo}
          </p>
          <p>
            Note:
            {this.state.Note}
          </p>
        </div>
        <div className="portiontaken">
          <h3>Class Test</h3>
          <h4>English</h4>
          <p>
            Test Date
            {this.state.testDate}
          </p>
          <p>
            Chapter:
            {this.state.chapter}
          </p>
          <p>
            PageNo:
            {this.state.pageNo}
          </p>
          <p>
            Note:
            {this.state.Note}
          </p>
        </div>
        <div className="portiontaken">
          <h3>instructions</h3>
          <p>sadmnbsakjgdkajsbhdkjasbhdkjabasnnsa,dklsnadlmnskdln</p>
        </div>
        <div className="portiontaken">
          <h3>Files</h3>
        </div>
      </div>
    );
  }
}
