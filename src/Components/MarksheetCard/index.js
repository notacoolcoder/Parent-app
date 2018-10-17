import React, { Component } from "react";
import "./index.css";
import { Card, Icon } from "antd";
import Instructions from "../MessagesTab/Instructions";
import { Collapse } from "react-collapse";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: "",
      collapse: false,

      date: new Date().toString(),
      instructions: false,
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      data: this.props.data
    });
    console.log(this.props.data);
  }
  changeIcon() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h4>
          {this.state.data.id}. {this.state.data.examTypeName}
        </h4>
        <Icon
          type={this.state.collapse ? "down" : "up"}
          theme="outlined"
          style={{ margin: 10 }}
          onClick={this.changeIcon.bind(this)}
        />
        <Collapse isOpened={this.state.collapse}>
          <div style={{ width: "100%" }}>
            <table style={{ margin: "auto" }}>
              <tbody>
                <tr>
                  <th>Subject</th>
                  <th>Mark</th>
                  <th>Grade</th>
                  <th>totalMark</th>
                </tr>

                {this.props.data.paSubjectMarkList.map(i => (
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
        </Collapse>
      </div>
    );
  }
}
