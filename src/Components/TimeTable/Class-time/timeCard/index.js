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
          <div className="common-container">
          <div className="common-card" style={{width:"350px",borderRadius:"10px",height:"80px",display:"flex",justifyContent:"space-between",maxWidth:"95%" }}>
          <div style={{display:"flex"}}>
            <h1 style={{}}>{this.props.period}</h1>
            <h2 style={{marginLeft:"30px",marginTop:"8px",color:"#474747"}}>{this.props.subjectName}</h2>
          </div>
          <h3 style={{marginTop:"-10px",marginLeft:"10px",color:"#6F6D70"}}>Teacher : {this.props.teacherName}</h3>
          </div>
          </div>
        );
      }
    }