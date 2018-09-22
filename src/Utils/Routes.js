import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Appbar from ".././Components/Appbar";
import Home from ".././Components/Home";
import Messages from "../Components/MessagesTab";
import Login from ".././Components/Login";
import Profile from ".././Components/Profile";
import Timetable from "../Components/TimeTable";
import StudentReport from "../Components/StudentReport";
import AbsentReport from "../Components/AbsentReportandSubmit/AbsentReport.js";
import AbsentReportSubmit from "../Components/AbsentReportandSubmit/AbsentReportSubmit.js";
import Calender from "../Components/Calender";

export default class extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/calender" component={Calender} />
            <Route exact path="/absentreport" component={AbsentReport} />
            <Route
              exact
              path="/absentreportsubmit"
              component={AbsentReportSubmit}
            />
            <Route exact path="/studentreport" component={StudentReport} />
            <Route exact path="/timetable" component={Timetable} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={Home} />
            <Route exact path="/messages" component={Messages} />
          </Switch>
        </Router>
      </div>
    );
  }
}
