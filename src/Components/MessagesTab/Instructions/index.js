import React, { Component } from "react";
import "./index.css";
import DropdownCard from "../../DropdownCard";
export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 241236,
          subject: "Computer",
          templateName: "Pls contact ",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          date: "17/09/2018"
        },
        {
          id: 241236,
          subject: "Science",
          templateName: "Pls contact ",
          description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
          date: "17/09/2018"
        }
      ]
    };
  }

  componentDidMount() {}

  render() {
    console.log(this.state.data);

    return (
      <div>
        <DropdownCard instructions={true} data={this.state.data} />
      </div>
    );
  }
}
