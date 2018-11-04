import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import Drawer from "material-ui/Drawer";
import FlatButton from "material-ui/FlatButton";
import { Icon, Radio } from "antd";
import { Consumer } from "./Context";

const RadioGroup = Radio.Group;

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

const radioStyle = {
  display: "block",
  height: "30px",
  lineHeight: "30px"
};

export class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openModal: false,
      studentList: [],
      active: ""
    };
    this.style = {
      menuItem: {
        height: "40px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        fontSize: "20px",
        alignItems: "center",
        color: "#ffffff"
      }
    };
  }
  componentDidMount() {
    var active = localStorage.getItem("active");

    var data = JSON.parse(localStorage.getItem("data"));

    this.setState({ studentList: data.studentList, active });
    window.addEventListener("storage", () => {
      console.log("Changed!!");
    });
  }

  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => {
    this.setState({ openModal: false });
    console.log("current", this.state.active);

    localStorage.setItem("active", "" + this.state.active);
    window.dispatchEvent(new Event("storage"));

    this.props.activateStudent(this.state.active);
  };

  onIconClick = () => {
    this.setState({
      openModal: true
    });
  };

  onStudentChange = e => {
    this.setState({ active: e.target.value });
    console.log("sel", e.target.value);
  };

  render() {
    const actions = [,];
    return (
      <div>
        <AppBar
          style={{ backgroundColor: "rgb(53, 53, 110)" }}
          title="Parent Connect"
          showMenuIconButton={true}
          iconElementLeft={
            <div
              style={{
                height: "90%",
                margin: "auto",
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Icon
                style={{
                  width: "100%",
                  height: "80%",
                  fontSize: "30px",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center"
                }}
                type="bars"
                theme="outlined"
                onClick={this.handleToggle}
              />
              <Link to="/home/abc">
                <Icon
                  style={{
                    width: "100%",
                    height: "80%",
                    fontSize: "25px",
                    color: "white",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center"
                  }}
                  type="left"
                  theme="outlined"
                />
              </Link>
            </div>
          }
          iconElementRight={
            <Icon
              style={{
                width: "100%",
                height: "80%",
                fontSize: "25px",
                color: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
              }}
              type="user"
              theme="outlined"
              onClick={this.onIconClick}
            />
          }
        />
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.openModal}
          onRequestClose={this.handleClose}
        >
          <RadioGroup
            style={{ margin: "auto" }}
            value={this.state.active}
            onChange={this.onStudentChange}
          >
            {this.state.studentList.map(item => (
              <Radio style={radioStyle} value={"" + item.id}>
                {item.name}
              </Radio>
            ))}
          </RadioGroup>

          <FlatButton
            style={{
              margin: "auto",
              backgroundColor: "#fff44f ",
              color: "white"
            }}
            label="Submit"
            primary={true}
            keyboardFocused={true}
            onClick={this.handleClose}
          />
        </Dialog>
        <Drawer
          containerStyle={{
            backgroundColor: "rgb(53, 53, 110)",
            color: "#ffffff",
            paddingTop: 20
          }}
          docked={false}
          width={225}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <Link to="/home">
            <div style={this.style.menuItem} onClick={this.handleClose}>
              <Icon style={{ width: "30%" }} type="appstore" theme="outlined" />
              <div style={{ width: "70%" }}>Menu</div>
            </div>
          </Link>
          <Link to="/profile">
            <div style={this.style.menuItem} onClick={this.handleClose}>
              <Icon style={{ width: "30%" }} type="profile" theme="outlined" />
              <div style={{ width: "70%" }}>Profile</div>
            </div>
          </Link>
          <Link to="/messages">
            <div style={this.style.menuItem} onClick={this.handleClose}>
              <Icon style={{ width: "30%" }} type="message" theme="outlined" />
              <div style={{ width: "70%" }}>Messages</div>
            </div>
          </Link>

          <div style={this.style.menuItem} onClick={this.handleClose}>
            <Icon
              style={{ width: "30%" }}
              type="notification"
              theme="outlined"
            />
            <div style={{ width: "70%" }}>Notifications</div>
          </div>
          <div style={this.style.menuItem} onClick={this.handleClose}>
            <Icon style={{ width: "30%" }} type="contacts" theme="outlined" />
            <div style={{ width: "70%" }}>Contacts</div>
          </div>
          <div style={this.style.menuItem} onClick={this.handleClose}>
            <Icon style={{ width: "30%" }} type="setting" theme="outlined" />
            <div style={{ width: "70%" }}>Settings</div>
          </div>
          <div style={this.style.menuItem} onClick={this.handleClose}>
            <Icon style={{ width: "30%" }} type="poweroff" theme="outlined" />
            <div style={{ width: "70%" }}>Log Out</div>
          </div>
        </Drawer>
        {this.props.children}
      </div>
    );
  }
}

export default props => (
  <Consumer>
    {({ activateStudent, id, data }) => (
      <Main {...props} activateStudent={activateStudent} id={id} data={data} />
    )}
  </Consumer>
);
