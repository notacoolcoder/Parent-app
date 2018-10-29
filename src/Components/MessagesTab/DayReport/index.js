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

      spin: true,
      requestDate: new Date().toString(),
      studentId: localStorage.getItem("active")
    };
  }

  fetchData(date) {
    this.setState({ spin: true });
    console.log("studentId", this.state.studentId);
    console.log("sel date", this.state.requestDate);

    var data = {
      studentId: this.state.studentId,
      date: this.state.requestDate
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
    window.addEventListener("storage", e => {
      console.log("ee--", e);
    });
    navigator.onLine ? this.fetchData() : this.getCachedData();
  }

  getCachedData = () => {
    var data = localStorage.getItem("dayreport");
    this.setState({ data: JSON.parse(data), spin: false });
  };
  onDtaeChange(date, dateString) {
    console.log(date.toString());
    this.setState({ requestDate: date.toString() }, this.fetchData);
  }
  render() {
    const {
      paPortioncovereds,
      paHomeworks,
      paInstructions,
      paClassTests,
      dailyReportFiles
    } = this.state.data;
    return (
      <div>
        <div className="daily-report">
          <DatePicker
            size="small"
            defaultValue={moment(new Date(), "YYYY-MM-DD")}
            onChange={this.onDtaeChange.bind(this)}
            style={{ width: "120px", margin: "4px" }}
          />
        </div>
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
            <div className="portiontaken">
              <h3>Protions Taken</h3>
              {paPortioncovereds == null ? (
                <div>No data!</div>
              ) : (
                paPortioncovereds.map(q => (
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
                ))
              )}
              <hr />
            </div>
            <div className="portiontaken">
              <h3>Homework</h3>
              {paHomeworks == null ? (
                <div>No data!</div>
              ) : (
                paHomeworks.map(q => (
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
                ))
              )}
              <hr />
            </div>
            <div className="portiontaken">
              <h3>Class Test</h3>
              {paClassTests == null ? (
                <div>No data!</div>
              ) : (
                paClassTests.map(q => (
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
                ))
              )}
              <hr />
            </div>
            <div className="portiontaken">
              <h3>Instructions</h3>
              {paInstructions == null ? (
                <div>No data!</div>
              ) : (
                paInstructions.map(q => (
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
                ))
              )}
              <hr />
            </div>
            <div className="portiontaken">
              <h3>Files</h3>
              {dailyReportFiles == null ? (
                <div>No data!</div>
              ) : (
                dailyReportFiles.map(q => (
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
                ))
              )}
            </div>
          </div>
        )}
        <hr />
      </div>
    );
  }
}
