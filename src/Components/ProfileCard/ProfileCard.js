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
              Name:
              {this.props.data.name}
            </span>
            <span>
              Id:
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
                Class:
                {this.props.data.standard}
              </span>
              <span>
                Division:
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
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span>
                Blood:
                {this.props.data.bloodGroup}
              </span>
              <span>
                DOB:
                {this.props.data.dateOfBirth}
              </span>
              <span>
                Gender:
                {this.props.data.gender}
              </span>
              <span>
                School:
                {this.props.data.schoolName}
              </span>
              <span>
                Admission No:
                {this.props.data.admissionNo}
              </span>
              <span>
                Roll No:
                {this.props.data.rollNo}
              </span>
            </div>
          </Collapse>
        </div>
      </div>
    );
  }
}
