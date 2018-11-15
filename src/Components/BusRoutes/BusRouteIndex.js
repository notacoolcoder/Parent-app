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
      path:[],
      routeId: "",
      collapse: false,
      spin:true,
      last:{},
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
      var length = that.state.route.length
      var r = length-1
       
    for(var t = 0;t<that.state.route.length-1;t++){
      
      that.state.path.push([{
        lat:that.state.route[t].lat,
        lng:that.state.route[t].lon
      },{
        lat:that.state.route[t+1].lat,
        lng:that.state.route[t+1].lon
      }])
    }
   var last = that.state.route[r]
    
      that.setState({ spin: false,last:last });
    });
  };
  render() {
    return (
      <div style={{width:"360px", margin: "auto", display: "flex", flexDirection: "column" }}>
        {this.state.spin ? (
          <Spin />
        ) : (
          <div>
             <MapWork  style={{width:300,height:300}}
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC7GkW3KZMvbakRdzKeDbV-61l1-6UKzE0&v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
             data={this.state.path} last={this.state.last}/>
          </div>
        )}
      </div>
    );
  }
}
