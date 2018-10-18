import React, { Component } from "react";
import "./index.css";
import { Card, Icon, Spin } from "antd";
import Instructions from "../MessagesTab/Instructions";
import { Collapse } from "react-collapse";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: "",
      collapse: false,
      spin: true,
      date: new Date().toString(),
      instructions: false,
      data: []
    };
  }

  componentDidMount() {
    this.setState({
      messageContent: this.props.message,
      instructions: this.props.instructions,
      data: this.props.data
    });
  }
  onIconClick = () => {
    this.setState({ collapse: !this.state.collapse });
  };
  render() {
    return (
      <div className="dropdown-card-messages">
        <div className="messages-content">
          <h4>{this.props.date}</h4>
          <Icon
            type={this.state.collapse ? "up " : "down"}
            onClick={this.onIconClick}
            style={{ display: "flex" }}
          />
          <Collapse isOpened={this.state.collapse}>
            <div style={{ width: "100%" }}>
              {this.state.instructions ? (
                <div>
                  {this.state.data == null ? (
                    <div>No data</div>
                  ) : (
                    <div>
                      {this.state.data.map(w => (
                        <span>
                          <h4>{w.subject}</h4>
                          <p>{w.description}</p>
                        </span>
                      ))}{" "}
                    </div>
                  )}
                </div>
              ) : (
                <div>
                  {this.state.data == null ? (
                    <div>No data</div>
                  ) : (
                    <div>
                      {this.state.data.map(v => (
                        <span>
                          <h4>{v.subject}</h4>
                          {this.props.test ? (
                            <p>
                              Test Date:
                              {v.testDate}
                            </p>
                          ) : null}
                          <p>
                            Chapter:
                            {v.chapters}
                          </p>
                          <p>
                            PageNo:
                            {v.pageNo}
                          </p>
                          <p>
                            Description:
                            {v.description}
                          </p>
                          <p>
                            TemplateName:
                            {v.templateName}
                          </p>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </Collapse>
        </div>
        <hr />
      </div>
    );
  }
}
