import React, { Component } from "react";
import { db } from "../../Utils/config";

export default class extends Component {
  componentDidMount() {
    const id = localStorage.getItem("id");
    const schoolId = localStorage.getItem("schoolID");
    db.ref("mapMode")
      .child(schoolId)
      .child(id)
      .set({ mode: true });
  }
  render() {
    return <div />;
  }
}
