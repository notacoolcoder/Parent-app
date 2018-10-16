import React, { Component } from "react";
import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import NavigationClose from "material-ui/svg-icons/navigation/close";
import a from "./05.jpg";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import "./Modal.css";

function handleClick() {
  alert("onClick triggered on the title component");
}

const styles = {
  block: {
    maxWidth: 250
  },
  radioButton: {
    marginBottom: 16
  }
};

class Modal extends Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = [,];
    return (
      <div className="modal">
        <Dialog
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          style={{
            margin: "auto",
            width: "90%",
            maxWidth: "360px",
            position: "relative"
          }}
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
      </div>
    );
  }
}

export default Modal;
