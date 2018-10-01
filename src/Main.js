import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppBar from "material-ui/AppBar";

import Drawer from "material-ui/Drawer";

import { Icon } from "antd";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  render() {
    return (
      <div>
        <AppBar
          style={{ backgroundColor: "rgb(53, 53, 110)" }}
          title="Parent Connect"
          onClick={this.handleToggle}
          iconElementRight={
            <Icon
              style={{
                width: "100%",
                height: "80%",
                fontSize: "25px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              type="user"
              theme="outlined"
            />
          }
        />
        <Drawer
          containerStyle={{
            backgroundColor: "rgb(53, 53, 110)",
            color: "#ffffff"
          }}
          docked={false}
          width={225}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <div
            style={{
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "20px",
              alignItems: "center",
              color: "#ffffff"
            }}
            onClick={this.handleClose}
          >
            <Icon style={{ width: "30%" }} type="appstore" theme="outlined" />
            <div style={{ width: "70%" }}>Menu</div>
          </div>
          <div
            style={{
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "20px",
              alignItems: "center",
              color: "#ffffff"
            }}
            onClick={this.handleClose}
          >
            <Icon style={{ width: "30%" }} type="profile" theme="outlined" />
            <div style={{ width: "70%" }}>Profile</div>
          </div>
          <div
            style={{
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "20px",
              alignItems: "center",
              color: "#ffffff"
            }}
            onClick={this.handleClose}
          >
            <Icon style={{ width: "30%" }} type="message" theme="outlined" />
            <div style={{ width: "70%" }}>Messages</div>
          </div>
          <div
            style={{
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "20px",
              alignItems: "center",
              color: "#ffffff"
            }}
            onClick={this.handleClose}
          >
            <Icon
              style={{ width: "30%" }}
              type="notification"
              theme="outlined"
            />
            <div style={{ width: "70%" }}>Notifications</div>
          </div>
          <div
            style={{
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "20px",
              alignItems: "center",
              color: "#ffffff"
            }}
            onClick={this.handleClose}
          >
            <Icon style={{ width: "30%" }} type="contacts" theme="outlined" />
            <div style={{ width: "70%" }}>Contacts</div>
          </div>
          <div
            style={{
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "20px",
              alignItems: "center",
              color: "#ffffff"
            }}
            onClick={this.handleClose}
          >
            <Icon style={{ width: "30%" }} type="setting" theme="outlined" />
            <div style={{ width: "70%" }}>Settings</div>
          </div>
          <div
            style={{
              height: "40px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              fontSize: "20px",
              alignItems: "center",
              color: "#ffffff"
            }}
            onClick={this.handleClose}
          >
            <Icon style={{ width: "30%" }} type="poweroff" theme="outlined" />
            <div style={{ width: "70%" }}>Log Out</div>
          </div>
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}
