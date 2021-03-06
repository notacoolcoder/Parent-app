import React, { Component } from "react";
import { Icon, Carousel, message } from "antd";
import "./index.css";
import { Link } from "react-router-dom";
import { Consumer } from "../../Context";
import i from './home.jpg';
//import { askForPermissioToReceiveNotifications } from "../../Utils/config";
import { baseUrl } from "./../../Api";

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { token: "",
    background:""
  };
  }
  componentDidMount() {
    const id = this.props.match.params.id;
    console.log("id", id);

    if (id != "home") {
      const schoolCode = this.props.match.params.sc;
      //this.props.setData(id);

      var that = this;

      fetch(
        baseUrl + "profile.html?parentId=" + id + "&schoolCode=" + schoolCode,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        }
      )
        .then(respose => {
          return respose.json();
        })
        .then(value => {
          console.log(value);
          var active = value.studentList[0].id;
          const school = value.studentList[0].schoolId;
          localStorage.setItem("data", JSON.stringify(value));
          var phone = value.parent.phoneNo;
          localStorage.setItem("phone", phone);
          this.props.activateStudent(active);
          localStorage.setItem("active", active);
          localStorage.setItem("schoolID", schoolCode);
          console.log(value);
          
          this.setState({background:value.studentList[0].schoolImageURL})
        });
    }
    else{
      var data = JSON.parse(localStorage.getItem('data'))
      this.setState({background:data.studentList[0].schoolImageURL})
    }
    

  }

  render() {
    return (
      <div className="homeMainDiv">
        <div
          className="row1InHome"
          style={{
            height: "45vh",
            width: "100%",
            maxWidth: "400px",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
        <img src={this.state.background === null ? i : this.state.background} style={{width:'100%',height:"100%"}}/>
        
          {/* <div style={{ fontSize: "28px" }}>AT THE END OF THE DAY</div>
          <div style={{ fontSize: "15px" }}>
            THE GOALS ARE SIMPLE: SAFETY AND SECURITY
            {this.state.token}
          </div> */}
        </div>
        <Carousel style={{ width: "100%" }}>
          <div
            style={{
              height: "45vh",
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "#2B2082",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                height: "27.5vh",
                width: "inherit",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Link to="/messages">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#266FC5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="message"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    MESSAGES
                  </h3>
                </div>
              </Link>
              <Link to="/diary">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#FD0041",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="book"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    DIARY
                  </h3>
                </div>
              </Link>
              <Link to="/busroutes">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#E6B000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="car"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    BUS
                  </h3>
                </div>
              </Link>
            </div>
            <div
              style={{
                height: "27.5vh",
                width: "inherit",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              {/* <Link to="/calendar">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#00A557",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="bars"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    CALENDER
                  </h3>
                </div>
              </Link> */}
              <Link to="/profile">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#0099B8",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="profile"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    STUDENTS
                  </h3>
                </div>
              </Link>
              {/* <Link to="/marksheet">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#9F00C5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="switcher"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    ACADEMICS
                  </h3>
                </div>
              </Link> */}
              <Link to="/gallery">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#9F00C5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="picture"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    GALLERY
                  </h3>
                </div>
              </Link>
              <Link to="/fee">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#266FC5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="wallet"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    FEES
                  </h3>
                </div>
              </Link>
            </div>
          </div>
          <div
            style={{
              height: "45vh",
              width: "100%",
              maxWidth: "400px",
              backgroundColor: "#2B2082",
              display: "flex",
              justifyContent: "space-around",
              flexDirection: "column"
            }}
          >
            <div
              style={{
                height: "27.5vh",
                width: "inherit",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              <Link to="/absentreport">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#FD0041",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="fork"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    LEAVES
                  </h3>
                </div>
              </Link>
              {/* <Link to="/library">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#E6B000",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="hdd"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    LIBRARY
                  </h3>
                </div>
              </Link> */}
            </div>
            <div
              style={{
                height: "27.5vh",
                width: "inherit",
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center"
              }}
            >
              {/* <Link to="/timetable">
                <div style={{ color: "white", textAlign: "center" }}>
                  <div
                    style={{
                      height: "80px",
                      width: "80px",
                      backgroundColor: "#00A557",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: "40px"
                    }}
                  >
                    <Icon
                      style={{ fontSize: "25px" }}
                      type="table"
                      theme="outlined"
                    />
                  </div>
                  <h3
                    style={{ color: "white", fontSize: "13px", weight: "25px" }}
                  >
                    TIME TABLE
                  </h3>
                </div>
              </Link> */}

              <div style={{ color: "white", textAlign: "center" }}>
                <div
                  style={{
                    height: "80px",
                    width: "80px",
                    backgroundColor: "#9F00C5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: "40px",
                    visibility: "hidden"
                  }}
                >
                  <Icon
                    style={{ fontSize: "25px" }}
                    type="picture"
                    theme="outlined"
                  />
                </div>
                <h3
                  style={{
                    color: "white",
                    fontSize: "13px",
                    weight: "25px",
                    visibility: "hidden"
                  }}
                >
                  GALLERY
                </h3>
              </div>
            </div>
          </div>
        </Carousel>
        <div
          style={{
            height: "10vh",
            width: "100%",
            maxWidth: "400px",
            display: "flex",
            justifyContent: "center",
            backgroundColor: "#1F1670",
            alignItems: "center",
            color: "white"
          }}
        >
          ©appscook.com
        </div>
      </div>
    );
  }
}

export default props => (
  <Consumer>
    {({ data, setData, activateStudent }) => (
      <Home
        {...props}
        data={data}
        setData={setData}
        activateStudent={activateStudent}
      />
    )}
  </Consumer>
);
