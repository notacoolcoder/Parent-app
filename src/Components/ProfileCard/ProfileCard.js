import React, { Component } from "react";
import "./ProfileCard.css";

import { Icon } from "antd";
import { Collapse } from "react-collapse";
export default class ProfileCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: false
    };
  }
  componentDidMount() {}
  onClickProfile = () => {
    this.setState({ expand: !this.state.expand });
  };
  render() {
    return (
      <div className="profile" onClick={this.onClickProfile}>
        <div className="profile-card">
          <div className="profile-pic">
            <img
              src={this.props.data.imageURL}
              style={{ width: "100%", borderRadius: "50%" }}
            />
          </div>
          <div className="profile-value">
            {" "}
            <span>
              <div>Name:</div>
              {this.props.data.name}
            </span>
            <span>
              <div>Id:</div>
              {this.props.data.id}
            </span>
            <span
              style={{
                display: "flex",
                width: "60%",
                justifyContent: "space-between"
              }}
            >
              <span>
                <div>Class:</div>
                {this.props.data.standard}
              </span>
              <span>
                <div>Division:</div>
                {this.props.data.division}
              </span>
            </span>
          </div>
        </div>
        <Icon
          type={this.state.expand ? "up" : "down"}
          style={{ cursor: "pointer" }}
          onClick={this.onClickProfile}
        />
        <div>
          <Collapse isOpened={this.state.expand}>
            <div
              className="profile-expandable"
              style={{
                display: "flex",
                flexDirection: "column",
                marginLeft: 20
              }}
            >
              <span>
                <div>Blood:</div>
                {this.props.data.bloodGroup}
              </span>
              <span>
                <div>DOB:</div>
                {this.props.data.dateOfBirth}
              </span>
              <span>
                <div>Gender:</div>
                {this.props.data.gender}
              </span>
              <span>
                <div>School:</div>
                {this.props.data.schoolName}
              </span>
              <span>
                <div>Admission No:</div>
                {this.props.data.admissionNo}
              </span>
              <span>
                <div>Roll No:</div>
                {this.props.data.rollNo}
              </span>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
