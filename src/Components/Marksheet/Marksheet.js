import React, { Component } from "react";
import "./Marksheet.css";
import AppBar from "material-ui/AppBar";
import { Tabs, Tab } from "material-ui/Tabs";
import Slider from "material-ui/Slider";
import c from "./05.jpg";
import { Step, Stepper, StepButton, StepContent } from "material-ui/Stepper";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import MarksheetCard from "../MarksheetCard";
import { baseUrl } from "./../../Api";

class Marksheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      studentId: localStorage.getItem("active")
    };
  }

  componentDidMount() {
    navigator.onLine ? this.getData() : this.getCachedData();
  }

  getData = () => {
    var data = {
      studentId: this.state.studentId
    };
    fetch(baseUrl + "academic/markSheet/", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => {
        return response.json();
      })
      .then(value => {
        console.log(value);
        this.setState({ data: value });
        localStorage.setItem("marksheet", JSON.stringify(value));
      });
  };

  getCachedData = () => {
    var data = localStorage.getItem("marksheet");
    this.setState({ data: JSON.parse(data) });
  };
  render() {
    {
      this.state.data.map(r => console.log(r));
    }
    return (
      <div className="marksheet">
        {this.state.data.map(r => (
          <MarksheetCard data={r} key={r.id} />
        ))}
      </div>
    );
  }
}

export default Marksheet;
