import React, { Component } from "react";
import "./Library.css";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Step, Stepper, StepButton, StepContent } from "material-ui/Stepper";

import b from "./05.jpg";
import { Menu } from "antd";

const SubMenu = Menu.SubMenu;

class Library extends Component {
  state = {
    stepIndex: 0
  };

  handleNext = () => {
    const { stepIndex } = this.state;
    if (stepIndex < 2) {
      this.setState({ stepIndex: stepIndex + 1 });
    }
  };

  handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };

  render() {
    return (
      <div className="masterdiv" style={{ paddingBottom: 5 }}>
        {/* The below code is the table one. */}
        <div className="row">
          <div className="column1">
            <p>No.of books permitted</p>
          </div>
          <div className="column2">
            <p>505 Nos.</p> {/*this data is supposed to be fetched*/}
          </div>
        </div>
        <div className="row">
          <div className="column1">
            <p>No.of books taken</p>
          </div>
          <div className="column2">
            <p>50 No</p> {/*this data is supposed to be fetched*/}
          </div>
        </div>
        <div className="row">
          <div className="column1">
            <p>No.of books to be taken</p>
          </div>
          <div className="column2">
            <p>50 Nos.</p> {/*this data is supposed to be fetched*/}
          </div>
        </div>
        {/* The table code ends here

                Accordion code starts */}
        <div className="accordion">
          <Menu
            mode="inline"
            style={{ width: "100%", borderRight: 0, textAlign: "left" }}
          >
            <SubMenu key="pre" title="Present Books Taken">
              <Menu.Item>Balarama</Menu.Item>
              <Menu.Item>Wings of Fire</Menu.Item>
            </SubMenu>
            <SubMenu key="his" title="Book History">
              <Menu.Item>No items</Menu.Item>
            </SubMenu>
            <SubMenu key="book" title="Book a book">
              <Menu.Item>
                Come after some time. All books have been issued.
              </Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        {/* footer codde */}
        {/* Footer is not sticking to the bottom. */}
      </div>
    );
  }
}
export default Library;
