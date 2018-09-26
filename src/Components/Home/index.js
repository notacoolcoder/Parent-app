import React, { Component } from 'react';
import { Icon } from 'antd';
import './index.css';
import {Link} from 'react-router-dom'

export default class  extends Component {
    constructor(props){
      super(props)
      this.state = {
        
      }
    }
    
    render(){   
      return(
        <div className="homeMainDiv">
          <div className="row1InHome" style={{height : "45vh" , width : "360px" , maxWidth : "100%" , color : "white" , display : "flex" , flexDirection : "column", justifyContent : "center" , alignItems : "center"}}>
            <div style={{fontSize : "28px"}}>AT THE END OF THE DAY</div>
            <div style={{fontSize : "15px"}}>THE GOALS ARE SIMPLE: SAFETY AND SECURITY</div>
          </div>
          <div style={{height : "45vh" ,paddingTop:5, width : "360px", maxWidth : "100%" , backgroundColor : "#2B2082" , display : "flex" , justifyContent : "space-around" ,flexDirection : "column"}}>
            <div style={{height : "27.5vh" , width : "inherit" , display : "flex" , flexDirection : "row" , justifyContent : "space-around" , alignItems : "center"}}>
              <Link to='/messages'>
              
              <div style={{color:"white",textAlign:"center",}}><div style={{height : "80px" , width : "80px" , backgroundColor : "#266FC5" , display : "flex" , alignItems :"center" , justifyContent : "center" , borderRadius : "40px"}}><Icon style={{fontSize : "25px"}} type="copy" theme="outlined" /></div><h3 style={{color:"white",fontSize:"13px",weight:"25px"}}>CIRCULAR</h3></div>
              </Link>
              <div style={{color:"white",textAlign:"center",}}><div style={{height : "80px" , width : "80px" , backgroundColor : "#FD0041" , display : "flex" , alignItems :"center" , justifyContent : "center" , borderRadius : "40px"}}><Icon style={{fontSize : "25px"}} type="copy" theme="outlined" /></div><h3 style={{color:"white",fontSize:"13px",weight:"25px"}}>FEES</h3></div>
              <div style={{color:"white",textAlign:"center",}}><div style={{height : "80px" , width : "80px" , backgroundColor : "#E6B000" , display : "flex" , alignItems :"center" , justifyContent : "center" , borderRadius : "40px"}}><Icon style={{fontSize : "25px"}} type="bar-chart" theme="outlined" /></div><h3 style={{color:"white",fontSize:"13px",weight:"25px"}}>DAILY REPORT</h3></div>
            </div>
            <div style={{height : "27.5vh" , width : "inherit" , display : "flex" , flexDirection : "row" , justifyContent : "space-around" , alignItems : "center"}}>
              <Link to='/calendar' >
              <div style={{color:"white",textAlign:"center",}}><div style={{height : "80px" , width : "80px" , backgroundColor : "#00A557" , display : "flex" , alignItems :"center" , justifyContent : "center" , borderRadius : "40px"}}><Icon style={{fontSize : "25px"}} type="copy" theme="outlined" /></div><h3 style={{color:"white",fontSize:"13px",weight:"25px"}}>CALENDER</h3></div>
              </Link>
              <Link to='/studentreport'>
              
              <div style={{color:"white",textAlign:"center",}}><div style={{height : "80px" , width : "80px" , backgroundColor : "#0099B8" , display : "flex" , alignItems :"center" , justifyContent : "center" , borderRadius : "40px",marginLeft:"18px"}}><Icon style={{fontSize : "25px"}} type="profile" theme="outlined" /></div><h3 style={{color:"white",fontSize:"13px",weight:"25px"}}>STUDENT REPORT</h3></div>
              </Link>
              <div style={{color:"white",textAlign:"center",}}><div style={{height : "80px" , width : "80px" , backgroundColor : "#9F00C5" , display : "flex" , alignItems :"center" , justifyContent : "center" , borderRadius : "40px"}}><Icon style={{fontSize : "25px"}} type="picture" theme="outlined" /></div><h3 style={{color:"white",fontSize:"13px",weight:"25px"}}>GALLERY</h3></div>
            </div>
          </div>
          <div style={{height : "10vh" , width : "360px" , maxWidth : "100%" , display : "flex" , justifyContent :"center" , backgroundColor :"#1F1670" , alignItems :"center",color:"white"}}>©appscook.com</div>
        </div>
      );
    }
  }