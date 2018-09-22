import React, { Component } from 'react';
import "./index.css"
import { Tabs } from "antd";
import Card from "./timeCard"





const TabPane = Tabs.TabPane;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[]
    };
  }

  componentDidMount() {
    var a = [{
      number:"1",
      title:"chemistry",
      teacher:"shibili"
    },{
      number:"2",
      title:"chemistry",
      teacher:"shibili"
    },{
      number:"3",
      title:"chemistry",
      teacher:"shibili"
    },{
      number:"4",
      title:"chemistry",
      teacher:"shibili"
    },{
      number:"5",
      title:"chemistry",
      teacher:"shibili"
    },{
      number:"6",
      title:"chemistry",
      teacher:"shibili"
    },{
      number:"7",
      title:"chemistry",
      teacher:"shibili"
    },{
      number:"8",
      title:"chemistry",
      teacher:"shibili"
    }]
   
    this.setState({data:a})
  }



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
            <TabPane tab="Monday" key="1">
             {this.state.data.map(item=>(<Card number="1" title="Chemistry" teacher="shibili"/>)) }
            </TabPane>
            <TabPane tab="Tuesday" key="2">
              
            </TabPane>
            <TabPane tab="Wednesday" key="3">
              
            </TabPane>
            <TabPane tab="Thursday" key="4">
              
            </TabPane>
            <TabPane tab="Friday" key="5">
              
            </TabPane>
            <TabPane tab="Saturday" key="6">
              
            </TabPane>  
            
          </Tabs>
        </div>
      </div>
    );
  }
}