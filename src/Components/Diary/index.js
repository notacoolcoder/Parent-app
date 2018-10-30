import React, { Component } from "react";
import "./index.css";
import { baseUrl } from "../../Api";
import { Icon, Spin, Button } from "antd";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        circularList: [],
        dailyReport: []
      },
      studentId: localStorage.getItem("active"),
      phone: localStorage.getItem("phone"),
      spin: true,
      today: new Date().toString()
    };
  }
  componentDidMount() {
    console.log(this.state.phone, localStorage.getItem("phone"));

    var data = {
      studentId: this.state.studentId,
      phoneNumber: this.state.phone
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

  onNext = () => {
    console.log("333", this.state.today);
    var date = new Date();
    const today = new Date(this.state.today);
    date.setDate(today.getDate() + 1);
    var data = {
      studentId: this.state.studentId,
      date: date.toString(),
      previousOrNext: "next"
    };
    this.setState({ spin: true });

    console.log("get.state.date", this.state.today);

    fetch(baseUrl + "dailyreport/dayReport/previousOrNext", {
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
        console.log("next", value);

        const data = this.state.data;
        data.dailyReport = value;
        const dateParts = value.date.split("/");
        const today = new Date(
          dateParts[2],
          dateParts[1] - 1,
          dateParts[0]
        ).toString();

        console.log("new date", today);
        this.setState({ data, spin: false, today });

        console.log("state.date", this.state.today);
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  onPrev = () => {
    var date = new Date();
    const today = new Date(this.state.today);
    date.setDate(today.getDate() - 1);
    var data = {
      studentId: this.state.studentId,
      date: date.toString(),
      previousOrNext: "previous"
    };
    console.log("get.state.date", this.state.today);
    this.setState({ spin: true });

    fetch(baseUrl + "dailyreport/dayReport/previousOrNext", {
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
        console.log("prev", value);
        const data = this.state.data;
        data.dailyReport = value;
        const dateParts = value.date.split("/");
        const today = new Date(
          dateParts[2],
          dateParts[1] - 1,
          dateParts[0]
        ).toString();

        console.log("new date", today);
        this.setState({ data, spin: false, today });

        console.log("state.date", this.state.today);
      })
      .catch(err => {
        console.log("err", err);
      });
  };
  render() {
    const {
      paPortioncovereds,
      paHomeworks,
      paInstructions,
      paClassTests,
      dailyReportFiles
    } = this.state.data.dailyReport;
    const circularList = this.state.data.circularList;
    return (
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          <Button type="primary" onClick={this.onPrev}>
            <Icon type="left" />
            Prev
          </Button>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <h3>Diary</h3>
            <div className="underline" />
          </div>
          <Button type="primary" onClick={this.onNext}>
            Next
            <Icon type="right" />
          </Button>
        </div>
        <div className="diary" style={{ marginTop: 10 }}>
          {this.state.spin ? (
            <Spin />
          ) : (
            <div>
              <div className="diary-circular">
                <h4>Circular</h4>

                {circularList.length == 0 ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 10
                    }}
                  >
                    No data!
                  </div>
                ) : (
                  circularList.map((list, index) => (
                    <div className="message-card-diary">
                      <span>
                        {index}.{list.date}
                      </span>
                      <span>{list.message}</span>
                    </div>
                  ))
                )}
              </div>
              <div className="day-report">
                <h4>Portions Taken</h4>
                {paPortioncovereds == null ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 10
                    }}
                  >
                    No data!
                  </div>
                ) : (
                  paPortioncovereds.map((portion, index) => (
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
                  ))
                )}
              </div>
              <div className="homework-diary">
                <h4>Homework</h4>
                {paHomeworks == null ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 10
                    }}
                  >
                    No data!
                  </div>
                ) : (
                  paHomeworks.map((homework, index) => (
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
                  ))
                )}
              </div>
              <div className="test-diary">
                <h4>Test</h4>
                {paClassTests == null ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 10
                    }}
                  >
                    No data!
                  </div>
                ) : (
                  <div>
                    {paClassTests.map((test, index) => (
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
                    ))}
                  </div>
                )}
              </div>
              <div className="instruction-diary">
                <h4>Instruction</h4>
                {paInstructions == null ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 10
                    }}
                  >
                    No data
                  </div>
                ) : (
                  paInstructions.map((instruction, index) => (
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
                  ))
                )}
              </div>
              <div className="files-diary">
                <h4>Files</h4>
                {dailyReportFiles == null ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: 10
                    }}
                  >
                    No data
                  </div>
                ) : (
                  dailyReportFiles.map((file, index) => (
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
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
