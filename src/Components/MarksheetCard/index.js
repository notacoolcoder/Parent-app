import React, { Component } from "react";
import "./index.css";
import { Card, Icon } from "antd";
import Instructions from "../MessagesTab/Instructions";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: "",
      icon: false,
      class: "common-card dropdown-card",
      date: new Date().toString(),
      instructions: false,
      data: {}
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
  }
  changeIcon() {
    this.setState({
      icon: true,
      class: "common-card dropdown-content"
    });
  }
  changeIconClose() {
    this.setState({
      icon: false,
      class: "common-card dropdown-card"
    });
  }
  render() {
    return (
      <div className="common-container">
        <div className={this.state.class}>
          <h4>
            {this.state.data.id}. {this.state.data.examTypeName}
          </h4>

          {this.state.icon ? (
            <div className="dropdown-content-container">
              <div style={{ width: "100%" }}>
                <table style={{ margin: "auto" }}>
                  <tbody>
                    <tr>
                      <th>Subject</th>
                      <th>Mark</th>
                      <th>Grade</th>
                      <th>totalMark</th>
                    </tr>

                    {this.state.data.paSubjectMarkList.map(i => (
                      <tr>
                        <td>{i.subjectName}</td>
                        <td>{i.markObtained}</td>
                        <td>{i.grade}</td>

                        <td>{i.totalMark}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <Icon
                type="up"
                theme="outlined"
                style={{
                  margin: 10,
                  display: "flex",
                  justifyContent: "flex-end",
                  cursor: "pointer",
                  flexDirection: "column"
                }}
                onClick={this.changeIconClose.bind(this)}
              />
            </div>
          ) : (
            <Icon
              type="down"
              theme="outlined"
              style={{ margin: 10 }}
              onClick={this.changeIcon.bind(this)}
            />
          )}
        </div>
      </div>
    );
  }
}
