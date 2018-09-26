import React, { Component } from 'react'
import "./FeeCard"
import { Icon,Modal,Radio,Input } from "antd"
const RadioGroup = Radio.Group;

export default class FeeCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            Paid: true,
            pay: true,
            visibleModal:false,
            value:"1"
        }
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
          value: e.target.value,
        });
      }
    onVisible = () => {
        this.setState({pay:!this.state.pay})
    }
    showModal=()=>{
        this.setState({
            visibleModal: true,
          })
    }
    handleOk=()=>{

    }
    handleCancel=()=>{
        this.setState({visibleModal:false})
    }
    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
          };
        return (
            <div className="common-continer">
            <div className="common-card" style={{padding:"0.1px",display:"flex",flexDirection:"column"}}>
            <div style={{width:"100%",height:"auto",display:"flex"}}>
            <div style={{width:"70%"}}>
            <h4 style={{fontWeight:"bold",paddingLeft:"10px",paddingTop:"5px"}}>JUNE 2018 FEE RS 3524/-</h4>
            <h5 style={{paddingLeft:"10px",paddingTop:"1px"}}>Reason for leave</h5>
            </div>
            <div style={{width:"30%"}}>
            {this.state.Paid?
            <div>
                {this.state.pay?<div onClick={this.onVisible}  style={{cursor:"pointer",width:"100%",height:"100%",backgroundColor:"#F6F6F6",padding:"10px"}}>
            <h5>
                PAID RS 3254/- on 22/10/2016
            </h5>

            </div>:<Icon type="caret-up" onClick={this.onVisible}  style={{cursor:"pointer",paddingLeft:"40px",paddingTop:"10px"}} theme="outlined" />}
           
            </div>
            :
            
            <div style={{width:"60px",height:"25px",textAlign:"center",borderRadius:"10px",backgroundColor:"#8ec63f",fontWeight:"bold",marginLeft:"30px",marginTop:"15px"}}>PAY</div>
            } 
            </div>
            </div>
            {this.state.pay?null:<div style={{width:"100%",height:"auto",backgroundColor:"#e6e6e6",padding:"15px"}}>
               <div style={{display:"flex",justifyContent:"space-between"}}><h4>Tution Fee</h4><h4>2000</h4></div> 
               <div style={{display:"flex",justifyContent:"space-between"}}><h4>Term Fee</h4><h4>2000</h4></div>
               <div style={{display:"flex",justifyContent:"space-between"}}><h4>Library Fee</h4><h4>2000</h4></div>
               <hr style={{width:"100%"}}/>
               <div style={{display:"flex",justifyContent:"space-between"}}><h4><b>Total Amount</b></h4><h4><b>2000</b></h4></div>
                <div style={{cursor:"pointer",width:"100%",height:"40px",textAlign:"center",color:"white",backgroundColor:"#8EC63F",padding:"10px"}} onClick={this.showModal}>
                   <b>PAYMENT</b> 
                </div>
                <Modal style={{width:"50px"}}
          title="Payment Mode"
          visible={this.state.visibleModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
         
        >

          <RadioGroup onChange={this.onChange} value={this.state.value}>
        <Radio style={radioStyle} value={1}>Credit Card</Radio>
        <Radio style={radioStyle} value={2}>Debit Card</Radio>
        <Radio style={radioStyle} value={3}>Net Banking</Radio>
        <Radio style={radioStyle} value={4}>Any Bank</Radio>
      </RadioGroup>
        </Modal>
                </div>
                }

            


                
            
            </div>
             
            </div>
        )
    }
}
