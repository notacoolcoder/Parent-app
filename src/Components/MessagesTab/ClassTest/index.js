import React, { Component } from "react";
import "./index.css";
import DropdownCard from "../../DropdownCard";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 31470,
          subject: "Computer",
          testDate: "19/09/2018",
          templateName: "Study well for exam",
          chapters: "33,34",
          pageNo: "34,35,36,37,38",
          description: "",
          assignedDate: "17/09/2018"
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <DropdownCard test={true} data={this.state.data} />
      </div>
    );
  }
}
