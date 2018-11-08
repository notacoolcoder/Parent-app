import React, { Component } from "react";
import BusRoute from "./BusRoutes";
import { Icon, Spin } from "antd";
import { db } from "../../Utils/config";
export default class BusRouteIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: [],
      routeId: "",
      collapse: false,
      spin: true,
      studentId: localStorage.getItem("active")
    };
  }
  componentDidMount() {
    this.getData();
    window.addEventListener("storage", e => {
      this.setState({ studentId: localStorage.getItem("active") });
      this.getData();
    });
  }

  getData = () => {
    const wholeData = JSON.parse(localStorage.getItem("data"));
    const data = wholeData.studentList.find(
      item => item.id == this.state.studentId
    );
    console.log("data", data);
    const routeId = data.busRouteCode + data.busRouteId;
    this.setState({ routeId }, this.getLocations);
  };

  getLocations = () => {
    var that = this;
    db.ref(this.state.routeId).on("value", function(data) {
      data.forEach(r => {
        that.state.route.push(r.val());
        console.log(r.val());
      });
      that.setState({ spin: false });
    });
  };
  render() {
    return (
      <div style={{ margin: "auto", display: "flex", flexDirection: "column" }}>
        {this.state.spin ? (
          <Spin />
        ) : (
          <div>
            {this.state.route.map((g, index) => (
              <BusRoute index={index} lat={g.lat} long={g.lon} />
            ))}
          </div>
        )}
      </div>
    );
  }
}
