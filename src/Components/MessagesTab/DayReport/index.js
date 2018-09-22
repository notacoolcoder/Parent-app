import React, { Component } from "react";
import "./index.css";
import { DatePicker, Spin, Icon } from "antd";
import moment from "moment";
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
      requestDate: ""
    };
  }
  fetchData(date) {
    this.setState({ spin: true });
    var data = {
      studentId: 20570,
      date: "Mon Jun 11 2018 09:39:48 GMT+0530 (IST)"
    };
    fetch("http://test.ssdiary.com//ssdiary/parentApp/dailyreport/dayReport/", {
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
      });
  }
  componentDidMount() {
    console.log(this.state.date.toString());
    this.fetchData(this.state.date.toString());
  }
  onDtaeChange(date, dateString) {
    console.log(date.toString());
    this.setState({ requestDate: date.toString() });
    this.fetchData(this.state.date.toString());
  }
  render() {
    return (
      <div>
        {this.state.spin ? (
          <Spin />
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
