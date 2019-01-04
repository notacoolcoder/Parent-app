import React from "react";
import "./index.css";
import { Icon, Dropdown } from "antd";
import image from "../../Res/croupier.png";
import ProfileCard from "../ProfileCard/ProfileCard";
export default class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: []
    };
  }
  componentDidMount() {
    var data = JSON.parse(localStorage.getItem("data"));
    console.log("data.studentList" , data.studentList);
    this.setState({ student: data.studentList });
  }
  render() {
    return (
      <div>
        {this.state.student.map(student => (
          <div className="profileMainDiv">
            <ProfileCard data={student} />
            <hr />
          </div>
        ))}
      </div>
    );
  }
}
