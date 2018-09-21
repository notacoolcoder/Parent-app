import React, { Component } from "react";
import DropdownCard from "../../DropdownCard";
import { Dropdown } from "antd";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      homework: [
        {
          id: 260760,
          subject: "MALAYALAM",
          templateName: "Do your work",
          chapters: "345",
          pageNo: "",
          description: "",
          date: "18/09/2018"
        },
        {
          id: 260770,
          subject: "MALAYALAM",
          templateName: "Do your work",
          chapters: "567",
          pageNo: "323",
          description: "",
          date: "18/09/2018"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <DropdownCard data={this.state.homework} />
        <DropdownCard data={this.state.homework} />
        <DropdownCard data={this.state.homework} />
        <DropdownCard data={this.state.homework} />
      </div>
    );
  }
}
