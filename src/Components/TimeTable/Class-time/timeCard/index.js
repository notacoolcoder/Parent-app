import React, { Component } from 'react';
import "./index.css"
import {Card} from "antd"


export default class  extends Component {

    constructor(props){
      super(props)
    
      
    }
    
    componentDidMount(){
    
    
    }
    
    
      render() {
    
       
    
        return (
          <div style={{width:"300px",height:"50px",display:"flex",justifyContent:"space-between" }}>
          <div style={{display:"flex"}}>
            <h1 style={{marginTop:"",marginLeft:""}}>{this.props.number}</h1>
            <h2 style={{marginTop:"-17px",marginLeft:"10px"}}>{this.props.title}</h2>
          </div>
          <h5 style={{marginTop:"-17px",marginLeft:"10px"}}>{this.props.teacher}</h5>
          </div>
        );
      }
    }