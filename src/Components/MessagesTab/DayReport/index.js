import React, { Component } from "react";
import "./index.css";
import { DatePicker, Spin, Icon } from "antd";
import moment from "moment";
import { baseUrl } from "./../../../Api";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      date: moment(new Date(), "YYYY-MM-DD"),
      chapter: "21,22",
      pageNo: "121,131",
      Note: "sadsadasdsadas",
      spin: true,
      requestDate: "",
      studentId: localStorage.getItem("active")
    };
  }
  fetchData(date) {
    this.setState({ spin: true });
    console.log("studentId", this.state.studentId);

    var data = {
      studentId: this.state.studentId,
      date: "Mon Jun 11 2018 09:39:48 GMT+0530 (IST)"
    };
    fetch(baseUrl + "dailyreport/dayReport/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        console.log("res", response);

        return response.json();
      })
      .then(value => {
        console.log("val", value);

        localStorage.setItem("dayreport", JSON.stringify(value));
        this.setState({ data: value, spin: false });
      });
  }
  componentDidMount() {
    navigator.onLine
      ? this.fetchData(this.state.date.toString())
      : this.getCachedData();
  }

  getCachedData = () => {
    var data = localStorage.getItem("dayreport");
    this.setState({ data: JSON.parse(data) });
  };
  onDtaeChange(date, dateString) {
    console.log(date.toString());
    this.setState({ requestDate: date.toString() });
    this.fetchData(this.state.date.toString());
  }
  render() {
    return (
      <div>
        {this.state.spin ? (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Spin />
          </div>
        ) : (
          <div className="daily-report">
            <DatePicker
              size="small"
              value={this.state.date}
              onChange={this.onDtaeChange.bind(this)}
              style={{ width: "120px", margin: "4px" }}
            />
            <div className="portiontaken">
              <h3>Protions Taken</h3>
              {this.state.data.paPortioncovereds.map(q => (
                <span>
                  <h4>{q.subject}</h4>
                  <p>
                    Date:
                    {q.date}
                  </p>
                  <p>
                    Chapter:
                    {q.chapter}
                  </p>
                  <p>
                    PageNo:
                    {q.pageNo}
                  </p>
                  <p>
                    Description:
                    {q.description}
                  </p>

                  <p>
                    Template:
                    {q.templateName}
                  </p>
                </span>
              ))}
            </div>
            <div className="portiontaken">
              <h3>Homework</h3>
              {this.state.data.paHomeworks.map(q => (
                <span>
                  <h4>{q.subject}</h4>
                  <p>
                    Date:
                    {q.date}
                  </p>
                  <p>
                    Chapter:
                    {q.chapter}
                  </p>
                  <p>
                    PageNo:
                    {q.pageNo}
                  </p>
                  <p>
                    Description:
                    {q.description}
                  </p>

                  <p>
                    Template:
                    {q.templateName}
                  </p>
                </span>
              ))}
            </div>
            <div className="portiontaken">
              <h3>Class Test</h3>
              {this.state.data.paClassTests.map(q => (
                <span>
                  <h4>{q.subject}</h4>
                  <p>
                    Date:
                    {q.date}
                  </p>
                  <p>
                    Description:
                    {q.description}
                  </p>
                </span>
              ))}
            </div>
            <div className="portiontaken">
              <h3>Instructions</h3>
              {this.state.data.paInstructions.map(q => (
                <span>
                  <h4>{q.subject}</h4>
                  <p>
                    Date:
                    {q.date}
                  </p>

                  <p>
                    Description:
                    {q.description}
                  </p>

                  <p>
                    Template:
                    {q.templateName}
                  </p>
                </span>
              ))}
            </div>
            <div className="portiontaken">
              <h3>Files</h3>
              {this.state.data.dailyReportFiles.map(q => (
                <span>
                  <h4>{q.subject}</h4>
                  <p>
                    Date:
                    {q.date}
                  </p>
                  <p>
                    Description:
                    {q.description}
                  </p>

                  <p>
                    File:
                    <a href={q.fileUrl}>
                      <Icon
                        type="file"
                        theme="outlined"
                        style={{ fontSize: "20px" }}
                      />
                    </a>
                  </p>
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }
}
