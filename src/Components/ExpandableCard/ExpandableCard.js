import React, { Component } from "react";
import "./ExpandableCard.css";
import { Card, Icon } from "antd";

export default class ExpandableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: "",
      icon: false,
      class: "common-card message-card"
    };
  }

  componentDidMount() {
    this.setState({
      messageContent: this.props.message
    });
  }
  changeIcon() {
    this.setState({
      icon: true,
      class: "common-card message-content"
    });
  }
  changeIconClose() {
    this.setState({
      icon: false,
      class: "common-card message-card"
    });
  }
  render() {
    return (
      <div className="common-container">
        <div className={this.state.class}>
          <p>{this.state.messageContent}</p>
          {this.state.icon ? (
            <Icon
              type="up"
              theme="outlined"
              style={{ margin: 10, display: "flex", alignItems: "flex-end" }}
              onClick={this.changeIconClose.bind(this)}
            />
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
