import React, { Component } from "react";
import "./Library.css";
import AppBar from "material-ui/AppBar";
import FlatButton from "material-ui/FlatButton";
import RaisedButton from "material-ui/RaisedButton";
import { Step, Stepper, StepButton, StepContent } from "material-ui/Stepper";

import b from "./05.jpg";

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
      <div className="masterdiv">
        <AppBar
          className="colorbar1"
          title="Parents Connect"
          iconElementRight={
            <img
              src={b}
              alt="userpic"
              style={{ borderRadius: "40px", width: "40px", height: "40px" }}
            />
          }
        />

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
          <Stepper
            activeStep={this.state.stepIndex}
            linear={false}
            orientation="vertical"
          >
            <Step>
              <StepButton
                style={{ backgroundColor: "#8FC549" }}
                onClick={() => this.setState({ stepIndex: 0 })}
              >
                <p
                  style={{
                    margin: "auto",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "white"
                  }}
                >
                  Present Books Taken
                </p>
              </StepButton>
              <StepContent>
                <li>
                  <ol>Balarama</ol>
                  <ol>Wings of fire</ol>
                </li>
              </StepContent>
            </Step>
            <Step>
              <StepButton
                style={{ backgroundColor: "#00A99D" }}
                onClick={() => this.setState({ stepIndex: 1 })}
              >
                <p
                  style={{
                    margin: "auto",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "white"
                  }}
                >
                  Book's History
                </p>
              </StepButton>
              <StepContent>
                <p>No history</p>
              </StepContent>
            </Step>
            <Step>
              <StepButton
                style={{ backgroundColor: "#B25EA1" }}
                onClick={() => this.setState({ stepIndex: 2 })}
              >
                <p
                  style={{
                    margin: "auto",
                    fontWeight: "bold",
                    fontSize: "18px",
                    color: "white"
                  }}
                >
                  Book a book
                </p>
              </StepButton>
              <StepContent>
                <p>Come after some time. All books have been issued.</p>
              </StepContent>
            </Step>
          </Stepper>
        </div>
        {/* footer codde */}
        {/* Footer is not sticking to the bottom. */}
      </div>
    );
  }
}
export default Library;
