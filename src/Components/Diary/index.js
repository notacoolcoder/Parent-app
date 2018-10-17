import React, { Component } from "react";
import "./index.css";
import { baseUrl } from "../../Api";
import { Icon, Spin } from "antd";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      spin: true
    };
  }
  componentDidMount() {
    var data = {
      studentId: 20570,
      phoneNumber: "9544330995"
    };
    fetch(baseUrl + "dailyreport/diary/", {
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
      })
      .catch(err => {
        console.log("err", err);
      });
  }
  render() {
    return (
      <div className="diary">
        {this.state.spin ? (
          <Spin />
        ) : (
          <div>
            <div className="diary-circular">
              <h4>Circular</h4>
              {this.state.data.circularList.map((list, index) => (
                <div className="message-card-diary">
                  <span>
                    {index}.{list.date}
                  </span>
                  <span>{list.message}</span>
                </div>
              ))}
            </div>
            <div className="day-report">
              <h4>Portions Taken</h4>
              {this.state.data.dailyReport.paPortioncovereds == null ? (
                <div>No data</div>
              ) : (
                <div>
                  {this.state.data.dailyReport.paPortioncovereds.map(
                    (portion, index) => (
                      <div className="daily-report-dairy">
                        <span>
                          {index}.{portion.subject}
                        </span>
                        <span>
                          Template:
                          {portion.templateName}
                        </span>
                        <span>
                          Description:
                          {portion.description}
                        </span>
                        <span>
                          pageNo:
                          {portion.pageNo}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="homework-diary">
              <h4>Homework</h4>
              {this.state.data.dailyReport.paHomeworks == null ? (
                <div>No data </div>
              ) : (
                <div>
                  {this.state.data.dailyReport.paHomeworks.map(
                    (homework, index) => (
                      <div className="homework-dairy-get">
                        <span>
                          {index}.{homework.subject}
                        </span>
                        <span>
                          Template:
                          {homework.templateName}
                        </span>
                        <span>
                          Description:
                          {homework.description}
                        </span>
                        <span>
                          Chapter:
                          {homework.chapters}
                        </span>
                        <span>
                          pageNo:
                          {homework.pageNo}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="test-diary">
              <h4>Test</h4>
              {this.state.data.dailyReport.paClassTests == null ? (
                <div>No data</div>
              ) : (
                <div>
                  {this.state.data.dailyReport.paClassTests.map(
                    (test, index) => (
                      <div className="test-dairy-get">
                        <span>
                          {index}.{test.subject}
                        </span>
                        <span>
                          Template:
                          {test.templateName}
                        </span>
                        <span>
                          Description:
                          {test.description}
                        </span>
                        <span>
                          Chapter:
                          {test.chapters}
                        </span>
                        <span>
                          pageNo:
                          {test.pageNo}
                        </span>
                        <span>
                          assignedDate:
                          {test.assignedDate}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="instruction-diary">
              <h4>Instruction</h4>
              {this.state.data.dailyReport.paInstructions == null ? (
                <div>No data</div>
              ) : (
                <div>
                  {this.state.data.dailyReport.paInstructions.map(
                    (instruction, index) => (
                      <div className="instruction-dairy-get">
                        <span>{instruction.date}</span>
                        <span>
                          {index}.{instruction.subject}
                        </span>
                        <span>
                          Template:
                          {instruction.templateName}
                        </span>
                        <span>
                          Description:
                          {instruction.description}
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
            <div className="files-diary">
              <h4>Files</h4>
              {this.state.data.dailyReport.dailyReportFiles == null ? (
                <div>No data</div>
              ) : (
                <div>
                  {this.state.data.dailyReport.dailyReportFiles.map(
                    (file, index) => (
                      <div className="files-dairy-get">
                        <span>{file.date}</span>
                        <span>
                          {index}.{file.subject}
                        </span>
                        <span>
                          Description:
                          {file.description}
                        </span>
                        <span>
                          <a href={file.fileUrl}>
                            <Icon type="file" theme="outlined" />
                          </a>
                        </span>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  }
}
