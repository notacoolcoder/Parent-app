import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./Components/Home";
import Messages from "./Components/MessagesTab";

import Login from "./Components/Login";
import Profile from "./Components/Profile";
import Timetable from "./Components/TimeTable";
import StudentReport from "./Components/StudentReport";
import AbsentReport from "./Components/AbsentReportandSubmit/AbsentReport.js";
import AbsentReportSubmit from "./Components/AbsentReportandSubmit/AbsentReportSubmit.js";
import Calender from "./Components/Calender";
import Fee from "./Components/Fee";
import Diary from "./Components/Diary";
import Library from "./Components/Library/Library";
import Marksheet from "./Components/Marksheet/Marksheet";
import Main from "./Main";
export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Main>
              <Route exact path="/fee" component={Fee} />
              <Route exact path="/calendar" component={Calender} />
              <Route exact path="/absentreport" component={AbsentReport} />
              <Route
                exact
                path="/absentreportsubmit"
                component={AbsentReportSubmit}
              />
              <Route exact path="/marksheet" component={Marksheet} />
              <Route exact path="/library" component={Library} />
              <Route exact path="/studentreport" component={StudentReport} />
              <Route exact path="/timetable" component={Timetable} />
              <Route exact path="/profile" component={Profile} />

              <Route exact path="/home" component={Home} />
              <Route exact path="/diary" component={Diary} />
              <Route exact path="/messages" component={Messages} />
            </Main>
          </Switch>
        </Router>
      </div>
    );
  }
}
