import React, { Component } from "react";
import "./index.css";
import { Tabs } from "antd";
import Card from "./timeCard";

const TabPane = Tabs.TabPane;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: []
    };
  }

  componentDidMount() {
    var data = {
      standardId: 255,
      divisionId: 1249
    };
    fetch(
      "http://be.ssdiary.com/ClassTimetable/mobile/app/loadClassTimetable/",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        return response.json();
      })
      .then(value => {
        this.setState({ data: value });
      });
  }

  render() {
    return (
      <div>
        <div>
          <Tabs
            tabPosition="horizontal"
            tabBarStyle={{ backgroundColor: "#fff", color: "#000" }}
          >
            {this.state.data.map((item, index) => (
              <TabPane key={index} tab={item.dayName}>
                {item.periodTeacherClasSubjectList.map(item => (
                  <Card
                    subjectName={item.subjectName}
                    teacherName={item.teacherName}
                    period={item.period}
                  />
                ))}
              </TabPane>
            ))}
          </Tabs>
        </div>
      </div>
    );
  }
}
