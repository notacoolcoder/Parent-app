import React, { Component } from "react";
import "./ExpandableCard.css";
import { Card, Icon } from "antd";

export default class ExpandableCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageContent: "",
      collapse: false
    };
  }

  componentDidMount() {
    this.setState({
      messageContent: this.props.message
    });
  }
  changeIcon() {
    this.setState({
      collapse: !this.state.collapse
    });
  }

  render() {
    return (
      <div className="common-container">
        <div className={this.state.class}>
          <p>{this.state.messageContent}</p>

          <Icon
            type={this.state.collapse ? "up" : "down"}
            theme="outlined"
            style={{ margin: 10, display: "flex", alignItems: "flex-end" }}
            onClick={this.changeIcon.bind(this)}
          />
        </div>
      </div>
    );
  }
}
