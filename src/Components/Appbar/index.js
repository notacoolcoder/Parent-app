import React, { Component } from 'react';
import "./index.css"
import { Icon, Badge,Menu,Layout } from "antd"

const { Header, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu
export default class extends Component {

  constructor(props) {
    super(props)

    this.state={
      collapsed:false
    }
  }
  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  componentDidMount() {


  }


  render() {



    return (
      <div>
          <Layout >
        <Sider
        style={{height:"100vh"}}
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth="0"
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        
          <Header style={{ background: '#fff', padding: 0,width:"100%",backgroundColor:"#0067a3" }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          </Layout>

      </div>
    );
  }
}