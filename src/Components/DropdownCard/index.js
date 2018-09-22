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
      instructions: false
    };
  }

  componentDidMount() {
    this.setState({
      messageContent: this.props.message,
      instructions: this.props.instructions,
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
          <h4>{this.props.date}</h4>

          {this.state.icon ? (
            <div className="dropdown-content-container">
              <div style={{ width: "100%" }}>
                {this.state.instructions ? (
                  <div>
                    {this.state.data.map(w => (
                      <span>
                        <h4>{w.subject}</h4>
                        <p>{w.description}</p>
                      </span>
                    ))}
                  </div>
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
