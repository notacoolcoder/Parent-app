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
          <div className= "common-container" >
     <Card className="common-card">
    <p>Card content</p>
    <p>Card content</p>
  </Card>,
          </div>
        );
      }
    }