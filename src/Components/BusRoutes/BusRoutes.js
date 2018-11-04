import React, { Component } from "react";
import "./BusRoutes.css";
import { Icon, Spin } from "antd";
import { db } from "../../Utils/config";
import { Collapse } from "react-collapse";
import MapWork from "./MapWork";
export default class BusRoutes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div style={{ height: "auto" }}>
          <div className="bus-route">
            <div className="route-id-circle">
              Route
              <span>{this.props.index + 1}</span>
            </div>
            <div className="route-details">
              <span>RouteName</span>
              <span>Driver Name</span>
              <span>Phone</span>
            </div>
            <Icon
              type={this.state.collapse ? "up" : "down"}
              onClick={() => {
                this.setState({ collapse: !this.state.collapse });
              }}
            />
          </div>
          {this.state.collapse ? (
            <MapWork
              lat={this.props.lat}
              long={this.props.long}
              style={{ padding: "10px" }}
            />
          ) : null}
        </div>
      </div>
    );
  }
}
