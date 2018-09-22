import React, { Component } from 'react';

import './index.css';


import { Input, Icon } from 'antd';


export default class Login extends Component {

constructor(props){
  super(props)

  
}

componentDidMount(){


}


  render() {

    
   

    return (

      <div className="flex"  >
      

        <h1  style={{color: "white", textAlign:'center',width:'100%', marginTop: "20%"}}>Parent Connect</h1>
         
        <div className="card" >
          <div className="flex1">
            
          
          <div className="container">
          <div >
            <br/>
            <br/>
            <br/>
        <Input
        placeholder="Enter your username"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        style={{width:'100%'}}
        placeholder="Username"
      />
      </div>
      <br/>
      <br/>
      <div >
        <Input
        placeholder="Enter your password"
        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
        style={{width:'100%'}}
        placeholder="Password"
      />
      <br/>
      <br/>
      <br/>

      <div className="button" style={{textAlign: "center", fontWeight: "bold"}}>
      <p>Login</p>

      </div>
      </div>
           </div> 
          </div>
        </div>
      </div>
      
    );
  }
}

