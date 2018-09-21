import React, { Component } from "react";
import "./index.css";
import { Icon } from "antd";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: false,
      classname: "portionstaken"
    };
  }

  componentDidMount() {}
  onDropdown() {
    this.setState({
      icon: true,
      classname: "portionstaken-dorpdown"
    });
  }
  onDropUp() {
    this.setState({ icon: false, classname: "portionstaken" });
  }
  render() {
    return (
      <div className={this.state.classname}>
        {this.state.icon ? (
          <Icon type="up" theme="outlined" onClick={this.onDropUp.bind(this)} />
        ) : (
          <Icon
            type="down"
            theme="outlined"
            onClick={this.onDropdown.bind(this)}
          />
        )}

        <div />
      </div>
    );
  }
}
