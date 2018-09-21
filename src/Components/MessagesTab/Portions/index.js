import React, { Component } from "react";
import DropdownCard from "../../DropdownCard";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
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
          pageNo: "",
          description: "",
          date: "18/09/2018"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <DropdownCard data={this.state.data} />
        <DropdownCard data={this.state.data} />
        <DropdownCard data={this.state.data} />
        <DropdownCard data={this.state.data} />
      </div>
    );
  }
}
