import React, { Component } from "react";
import { db } from "../../Utils/config";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      routeId: ""
    };
  }
  componentDidMount() {
    const id = localStorage.getItem("id");
    const schoolId = localStorage.getItem("schoolID");
    db.ref("mapMode")
      .child(schoolId)
      .child(id)
      .child("mode")
      .set(true);
  }
  render() {
    return <div />;
  }
}
