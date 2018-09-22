import React, { Component } from 'react';
import "./index.css"
import {Icon} from "antd"


export default class  extends Component {

    constructor(props){
      super(props)
    
      this.state={
        visible:"none",
        display:true
      }
    }
    onHandle=()=>{
      this.setState({visible:"inline"})
      this.setState({display:!this.state.display})
    }
    onHandleClose=()=>{
      this.setState({visible:"none"})
      this.setState({display:!this.state.display})
    }
    componentDidMount(){
    
    
    }
    
    
      render() {
    
       
    
        return (
          <div className="common-container" >
            
            <div className="common-card" style={{paddingLeft:"10px",display:"flex",justifyContent:"space-between",width:"330px",display:"flex",borderRadius:"15px",maxWidth:"95%",height:"auto"}}>
          
              <div><h2>{this.props.examSubject}</h2>
             <h3>{this.props.examDate}  {this.props.examDay}</h3>
             <div style={{display:this.state.visible}}>
             <h3>start:{this.props.examStartTime}</h3>
             <h3>End:{this.props.examEndTime}</h3>
             <h3>Total Marks:{this.props.totalMark}</h3>
             <p>Remarks:{this.props.remarks}</p>
             </div> 
             </div>
             {this.state.display?<Icon type="caret-down" onClick={this.onHandle} theme="outlined" />:<Icon type="caret-up" onClick={this.onHandleClose} theme="outlined" />}
            
            </div>
          </div>
        );
      }
    }