import React, { Component } from "react";
import "./index.css";
import { Icon } from "antd";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        circularList: [
          {
            id: 1,
            messageType: "AccountNotification",
            message: "Your password is ssdparent\n -parent connect",
            date: "28/09/2018"
          },
          {
            id: 1,
            messageType: "AccountNotification",
            message: "Your password is ssdparent\n -parent connect",
            date: "28/09/2018"
          },
          {
            id: 1,
            messageType: "AccountNotification",
            message: "Your password is ssdparent\n -parent connect",
            date: "28/09/2018"
          }
        ],
        dailyReport: {
          date: "Mon Jun 11 2018 09:39:48 GMT+0530 (IST)",
          paPortioncovereds: [
            {
              id: 204414,
              subject: "ENGLISH",
              templateName: "1,2 question answers",
              chapters: "22,23",
              pageNo: "125,126,127",
              description: "",
              date: "11/06/2018"
            },
            {
              id: 204415,
              subject: "ENGLISH",
              templateName: "10 three letter words from practice writing book",
              chapters: "23,24",
              pageNo: "130",
              description: "",
              date: "11/06/2018"
            }
          ],
          paHomeworks: [
            {
              id: 107741,
              subject: "ENGLISH",
              templateName:
                "addition and   subtraction  of algebraic  expression",
              chapters: "22",
              pageNo: "127,128,129,130",
              description: "",
              date: "11/06/2018"
            },
            {
              id: 107742,
              subject: "ENGLISH",
              templateName: "answer maths question paper",
              chapters: "18,23,24,29,30",
              pageNo: "129,130,131,132,165,166",
              description: "",
              date: "11/06/2018"
            }
          ],
          paClassTests: [
            {
              id: 26531,
              subject: "ENGLISH",
              testDate: "19/06/2018",
              templateName: "activity sheet",
              chapters: "22,23,24,25,26,27,28,32",
              pageNo: "9,69,126,127,128,129",
              description: "",
              assignedDate: "11/06/2018"
            }
          ],
          paInstructions: [
            {
              id: 216629,
              subject: "ENGLISH",
              templateName: "2nd MID-TERM EXAM TIMETABLE",
              description: "",
              date: "11/06/2018"
            },
            {
              id: 216630,
              subject: "ENGLISH",
              templateName: "activity sheer hindi",
              description: "",
              date: "11/06/2018"
            },
            {
              id: 216631,
              subject: "ENGLISH",
              templateName:
                "meeting  about IGCSE tomorrow at auditorium. Time: 3 p.m. please attend",
              description: "",
              date: "11/06/2018"
            },
            {
              id: 216632,
              subject: "ENGLISH",
              templateName: "4th installment of FEE",
              description: "hahahaa",
              date: "11/06/2018"
            }
          ],
          dailyReportFiles: [
            {
              id: 2,
              subject: "ENGLISH",
              fileUrl:
                " https://s3-ap-southeast-1.amazonaws.com/appscook/ssd/dailyReport/0009/751/20188748902010583598323.xlsx",
              description: "portions",
              date: "11/06/2018"
            }
          ]
        },
        examTimetableDetailList: []
      }
    };
  }
  componentDidMount() {}
  render() {
    return (
      <div className="diary">
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
        <div className="homework-diary">
          <h4>Homework</h4>
          {this.state.data.dailyReport.paHomeworks.map((homework, index) => (
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
          ))}
        </div>
        <div className="test-diary">
          <h4>Test</h4>
          {this.state.data.dailyReport.paClassTests.map((test, index) => (
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
        <div className="instruction-diary">
          <h4>Instruction</h4>
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
        <div className="files-diary">
          <h4>Files</h4>
          {this.state.data.dailyReport.dailyReportFiles.map((file, index) => (
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
          ))}
        </div>
      </div>
    );
  }
}
