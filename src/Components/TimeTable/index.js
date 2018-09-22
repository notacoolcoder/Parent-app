import React, { Component } from 'react';
import "./index.css"
import { Tabs, Radio } from "antd";
import Class from "./Class-time"
import Exam from "./Exam-time"



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
            tabBarStyle={{ backgroundColor: "#35356e", color: "#fff" }}
          >
            <TabPane tab="Class" key="1">
              <Class/>
            </TabPane>
            <TabPane tab="Exam" key="2">
              <Exam/>
            </TabPane>
            
          </Tabs>
        </div>
      </div>
    );
  }
}