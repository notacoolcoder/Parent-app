import React, { Component } from "react";
import { Link } from "react-router-dom";
import AppBar from "material-ui/AppBar";
import Dialog from "material-ui/Dialog";
import Drawer from "material-ui/Drawer";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import FlatButton from "material-ui/FlatButton";
import { Icon } from "antd";

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      openModal : false ,
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


  handleToggle = () => this.setState({ open: !this.state.open });

  handleClose = () => this.setState({ open: false });

  handleClose = () => {
    this.setState({ openModal : false });
  };

  onIconClick = () => {
    this.setState({
      openModal : true ,
    })
  }

  render() {
    const actions = [,];
    return (
      <div>
        <AppBar
          style={{ backgroundColor: "rgb(53, 53, 110)" }}
          title="Parent Connect"
          onLeftIconButtonClick={this.handleToggle}
          iconElementRight={
            <Icon
              style={{
                width: "100%",
                height: "80%",
                fontSize: "25px",
                color : "white",
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
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
              value="light"
              label="Dhanista Sudhir Katuparampil, 10-F"
              style={styles.radioButton}
            />
            <RadioButton
              value="not-light"
              label="Keerthy, 5-A"
              style={styles.radioButton}
            />
            <RadioButton
              value="not-light1"
              label="Khyati, 5-A"
              style={styles.radioButton}
            />
            <RadioButton
              value="not-light2"
              label="Kiran, 5-A"
              style={styles.radioButton}
            />
          </RadioButtonGroup>

          <FlatButton
            style={{ margin: "auto", backgroundColor: "#fff44f " }}
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
