import React, { Component } from "react";
import "./index.css";
import { Tabs, Radio } from "antd";
import Circular from "./Circular";
import ClassTest from "./ClassTest";
import DayReport from "./DayReport";
import HomeWork from "./HomeWork";
import Files from "./Files";
import Portions from "./Portions";
import Instructions from "./Instructions";

const TabPane = Tabs.TabPane;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <Tabs
            defaultActiveKey="1"
            tabPosition="horizontal"
            style={{ height: "auto" }}
            tabBarStyle={{
              backgroundColor: "#35356e",
              color: "#fff",
              textAlign: "center"
            }}
          >
            <TabPane tab="Circular" key="1">
              <Circular />
            </TabPane>
            <TabPane tab="Day Report" key="2">
              <DayReport />
            </TabPane>
            <TabPane tab="Portions Taken" key="3">
              <Portions />
            </TabPane>
            <TabPane tab="Homework" key="4">
              <HomeWork />
            </TabPane>
            <TabPane tab="Instructions" key="5">
              <Instructions />
            </TabPane>
            <TabPane tab="Class Test" key="6">
              <ClassTest />
            </TabPane>
          </Tabs>
        </div>
      </div>
    );
  }
}
