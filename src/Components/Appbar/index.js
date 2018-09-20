import React, { Component } from 'react';
import "./index.css"
import { Icon, Badge,Menu,Layout,Input} from "antd"

const Search = Input.Search;

const { Header, Sider } = Layout;

const SubMenu = Menu.SubMenu
export default class extends Component {

  constructor(props) {
    super(props)

    this.state={
      collapsed:true
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
          <Layout style={{height:"100vh"}} >
        <Sider
        
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
          collapsedWidth="0"
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item key="1">
            <Search
      placeholder="input search text"
      onSearch={value => console.log(value)}
      style={{ width: 160 }}
    />
            </Menu.Item>
            <Menu.Item key="2">
            <div class="pa4 tc">
  <img
      src="http://tachyons.io/img/logo.jpg"
      class="br-100 ba h3 w3 dib" alt="avatar"/>
</div>
<h3>Principal</h3>
            </Menu.Item>
            
          </Menu>
        </Sider>
        
          <Header style={{ background: '#fff', padding: 0,width:"100%",backgroundColor:"#0067a3",height:"50px" }}>
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
              style={{fontSize:"23px",paddingLeft:"6px"}}
            />
          </Header>
          </Layout>

      </div>
    );
  }
}