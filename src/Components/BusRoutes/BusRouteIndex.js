import React, { Component } from "react";
import BusRoute from "./BusRoutes";
import { Icon, Spin } from "antd";
import MapWork from './MapWork';
import { db } from "../../Utils/config";
export default class BusRouteIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      route: [],
      routeId: "",
      collapse: false,
      spin:true,
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
    console.log(this.state.routeId);
    db.ref(this.state.routeId).on("value", function(data) {
      data.forEach(r => {
        that.state.route.push(r.val());
      });
      that.setState({ spin: false });
    });
  };
  render() {
    return (
      <div style={{width:"360px", margin: "auto", display: "flex", flexDirection: "column" }}>
        {this.state.spin ? (
          <Spin />
        ) : (
          <div>
             <MapWork  style={{width:'100%',maxWidth:400,height:'auto'}}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7GkW3KZMvbakRdzKeDbV-61l1-6UKzE0&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
             data={this.state.route}/>
          </div>
        )}
      </div>
    );
  }
}
