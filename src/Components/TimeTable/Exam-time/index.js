import React, { Component } from 'react';
import "./index.css"
import {Icon} from "antd"
import ExamCard from "./ExamCard"


export default class  extends Component {

    constructor(props){
      super(props)
    this.state={
        data:[],
        visible:"none",
        display:true
    }
      
    }
    
    componentDidMount(){
    var d =
    [
        {
            "id": 0,
            "examTypeName": "periodic test",
            "createdDate": 1536128155000,
            "examTypeNameCreatedDate": "periodic test-2018-09-05 11:45:55.0",
            "examTypeIdCreatedDate": "7522-05/09/2018",
            "examtimetableList": [
                {
                    "examTimeTableId": 113606,
                    "examDate": "2018-10-01",
                    "examDay": "monday",
                    "totalMark": 20,
                    "examSubject": "MALAYALAM",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 113609,
                    "examDate": "2018-10-02",
                    "examDay": "tuesday",
                    "totalMark": 20,
                    "examSubject": "Computer",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 113612,
                    "examDate": "2018-10-03",
                    "examDay": "wednesday",
                    "totalMark": 20,
                    "examSubject": "ENGLISH",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 113615,
                    "examDate": "2018-10-04",
                    "examDay": "thursday",
                    "totalMark": 20,
                    "examSubject": "MATHEMATICS",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                }
            ]
        },
        {
            "id": 0,
            "examTypeName": "annual exam",
            "createdDate": 1536123180000,
            "examTypeNameCreatedDate": "annual exam-2018-09-05 10:23:00.0",
            "examTypeIdCreatedDate": "7472-05/09/2018",
            "examtimetableList": [
                {
                    "examTimeTableId": 113592,
                    "examDate": "2018-09-06",
                    "examDay": "thursday",
                    "totalMark": 50,
                    "examSubject": "ENGLISH",
                    "examStartTime": "1:30 PM ",
                    "examEndTime": " 4:00 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 113593,
                    "examDate": "2018-09-07",
                    "examDay": "friday",
                    "totalMark": 50,
                    "examSubject": "MALAYALAM",
                    "examStartTime": "1:30 PM ",
                    "examEndTime": " 4:00 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 113594,
                    "examDate": "2018-09-08",
                    "examDay": "saturday",
                    "totalMark": 50,
                    "examSubject": "Science",
                    "examStartTime": "1:30 PM ",
                    "examEndTime": " 4:00 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 113595,
                    "examDate": "2018-09-10",
                    "examDay": "monday",
                    "totalMark": 50,
                    "examSubject": "MATHEMATICS",
                    "examStartTime": "1:30 PM ",
                    "examEndTime": " 4:00 PM",
                    "remarks": null
                }
            ]
        },
        {
            "id": 0,
            "examTypeName": "model exam",
            "createdDate": 1533362707000,
            "examTypeNameCreatedDate": "model exam-2018-08-04 11:35:07.0",
            "examTypeIdCreatedDate": "7470-04/08/2018",
            "examtimetableList": [
                {
                    "examTimeTableId": 110885,
                    "examDate": "2018-08-06",
                    "examDay": "monday",
                    "totalMark": 100,
                    "examSubject": "ENGLISH",
                    "examStartTime": "2:00 PM ",
                    "examEndTime": " 5:00 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 110886,
                    "examDate": "2018-08-07",
                    "examDay": "tuesday",
    "totalMark": 100,
                    "examSubject": "MALAYALAM",
                    "examStartTime": "2:00 PM ",
                    "examEndTime": " 5:00 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 110887,
                    "examDate": "2018-08-08",
                    "examDay": "wednesday",
                    "totalMark": 100,
                    "examSubject": "HINDI",
                    "examStartTime": "2:00 PM ",
                    "examEndTime": " 5:00 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 110888,
                    "examDate": "2018-08-09",
                    "examDay": "thursday",
                    "totalMark": 100,
                    "examSubject": "MATHEMATICS",
                    "examStartTime": "2:00 PM ",
                    "examEndTime": " 5:00 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 110889,
                    "examDate": "2018-08-10",
                    "examDay": "friday",
                    "totalMark": 100,
                    "examSubject": "Science",
                    "examStartTime": "2:00 PM ",
                    "examEndTime": " 5:00 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 110890,
                    "examDate": "2018-08-11",
                    "examDay": "saturday",
                    "totalMark": 100,
                    "examSubject": "Computer",
                    "examStartTime": "2:00 PM ",
                    "examEndTime": " 5:00 PM",
                    "remarks": null
                }
            ]
        },
        {
            "id": 0,
            "examTypeName": "annual exam",
            "createdDate": 1533362584000,
            "examTypeNameCreatedDate": "annual exam-2018-08-04 11:33:04.0",
            "examTypeIdCreatedDate": "7472-04/08/2018",
            "examtimetableList": [
                {
                    "examTimeTableId": 110880,
                    "examDate": "2018-08-06",
                    "examDay": "monday",
                    "totalMark": 50,
                    "examSubject": "ENGLISH",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": "1st chapter"
                },
                {
                    "examTimeTableId": 110881,
                    "examDate": "2018-08-07",
                    "examDay": "tuesday",
                    "totalMark": 50,
                    "examSubject": "MALAYALAM",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": "1st chapter"
                },
                {
                    "examTimeTableId": 110882,
                    "examDate": "2018-08-08",
                    "examDay": "wednesday",
                    "totalMark": 50,
                    "examSubject": "HINDI",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": "1st chapter"
                },
                {
                    "examTimeTableId": 110883,
                    "examDate": "2018-08-09",
                    "examDay": "thursday",
                    "totalMark": 50,
                    "examSubject": "MATHEMATICS",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": "1st chapter"
                },
                {
                    "examTimeTableId": 110884,
                    "examDate": "2018-08-10",
                    "examDay": "friday",
                    "totalMark": 50,
                    "examSubject": "Science",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": "1st & 2nd chapter"
                }
            ]
        },
        {
            "id": 0,
            "examTypeName": "14-06-2018",
            "createdDate": 1528965450000,
            "examTypeNameCreatedDate": "14-06-2018-2018-06-14 14:07:30.0",
            "examTypeIdCreatedDate": "7214-14/06/2018",
            "examtimetableList": [
                {
                    "examTimeTableId": 102722,
                    "examDate": "2018-06-21",
                    "examDay": "thursday",
    "totalMark": 50,
                    "examSubject": "ENGLISH",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": "hi"
                },
                {
                    "examTimeTableId": 102723,
                    "examDate": "2018-06-21",
                    "examDay": "thursday",
                    "totalMark": 50,
                    "examSubject": "MALAYALAM",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 102724,
                    "examDate": "2018-06-22",
                    "examDay": "friday",
                    "totalMark": 50,
                    "examSubject": "HINDI",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 102725,
                    "examDate": "2018-06-23",
                    "examDay": "saturday",
                    "totalMark": 50,
                    "examSubject": "EVS",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 102726,
                    "examDate": "2018-06-25",
                    "examDay": "monday",
                    "totalMark": 50,
                    "examSubject": "Science",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 102727,
                    "examDate": "2018-06-26",
                    "examDay": "tuesday",
                    "totalMark": 50,
                    "examSubject": "MATHEMATICS",
                    "examStartTime": "9:30 AM ",
                    "examEndTime": " 12:30 PM",
                    "remarks": null
                }
            ]
        },
        {
            "id": 0,
            "examTypeName": "11-06-2018 test",
            "createdDate": 1528709530000,
            "examTypeNameCreatedDate": "11-06-2018 test-2018-06-11 15:02:10.0",
            "examTypeIdCreatedDate": "7199-11/06/2018",
            "examtimetableList": [
                {
                    "examTimeTableId": 102709,
                    "examDate": "2018-06-13",
                    "examDay": "wednesday",
                    "totalMark": 50,
                    "examSubject": "ENGLISH",
                    "examStartTime": "10:00 AM ",
                    "examEndTime": " 11:00 AM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 102710,
                    "examDate": "2018-06-14",
                    "examDay": "thursday",
                    "totalMark": 50,
                    "examSubject": "MATHEMATICS",
                    "examStartTime": "10:00 AM ",
                    "examEndTime": " 11:00 AM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 102711,
                    "examDate": "2018-06-15",
                    "examDay": "friday",
                    "totalMark": 50,
                    "examSubject": "Science",
                    "examStartTime": "10:00 AM ",
                    "examEndTime": " 11:00 AM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 102712,
                    "examDate": "2018-06-16",
                    "examDay": "saturday",
                    "totalMark": 50,
                    "examSubject": "MALAYALAM",
                    "examStartTime": "10:00 AM ",
                    "examEndTime": " 11:00 AM",
                    "remarks": null
                },
                {
                    "examTimeTableId": 102713,
                    "examDate": "2018-06-18",
                    "examDay": "monday",
                    "totalMark": 50,
                    "examSubject": "Computer",
                    "examStartTime": "10:00 AM ",
                    "examEndTime": " 11:00 AM",
                    "remarks": null
                }
            ]
        }
    ]
    this.setState({data:d})
    }
    onHandle=()=>{
        this.setState({visible:"inline"})
        this.setState({display:!this.state.display})
      }
      onHandleClose=()=>{
        this.setState({visible:"none"})
        this.setState({display:!this.state.display})
      }
    
    
      render() {
    
    
    
        return (
            <div className="common-container" >
         {this.state.data.map(item=>(
            <div className="common-card exam-shadow" style={{width:"350px",height:"auto",display:"flex",flexDirection:"column"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}><h2>{item.examTypeName}</h2>{this.state.display?<Icon type="caret-down" onClick={this.onHandle} theme="outlined" />:<Icon type="caret-up" onClick={this.onHandleClose} theme="outlined" />}</div>
            <div style={{display:this.state.visible}}>
            {
                  item.examtimetableList.map((item1) =>(
                      
                    <ExamCard 
                    
                    examDate={item1.examDate}
                    examDay={item1.examDay} 
                    examSubject={item1.examSubject} 
                    examStartTime={item1.examStartTime}
                    examEndTime={item1.examEndTime} 
                    remarks={item1.remarks} />
                    
                  ))
              }
              </div>
             </div>
         ))} 
           
    </div>
         
        );
      }
    }