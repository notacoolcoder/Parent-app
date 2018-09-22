import React, { Component } from 'react';
import "./index.css"
import { Tabs } from "antd";
import Card from "./timeCard"





const TabPane = Tabs.TabPane;

export default class extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data:[],
      monday:[],
      tuesday:[]
    };
  }

  componentDidMount() {

var d = [
    {
        "dayName": "MON",
        "periodTeacherClasSubjectList": [
            {
                "period": 1,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 2,
                "subjectName": "HINDI",
                "subjectShortName": "HIN",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 3,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "anu",
                "teacherName": "anuKrish"
            },
            {
                "period": 4,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 5,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time":"",
               
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 6,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 7,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 8,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 9,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            }
        ],
        "isAdvanced": false
    },
    {
        "dayName": "TUE",
        "periodTeacherClasSubjectList": [
            {
                "period": 1,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 2,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 3,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"

},
            {
                "period": 4,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 5,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 6,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 7,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 8,
                "subjectName": "HINDI",
                "subjectShortName": "HIN",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 9,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            }
        ],
        "isAdvanced": false
    },
    {
        "dayName": "WED",
        "periodTeacherClasSubjectList": [
            {
                "period": 1,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 2,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 3,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 4,
                "subjectName": "HINDI",
                "subjectShortName": "HIN",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 5,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 6,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },

{
                "period": 7,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 8,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 9,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            }
        ],
        "isAdvanced": false
    },
    {
        "dayName": "THU",
        "periodTeacherClasSubjectList": [
            {
                "period": 1,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 2,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 3,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 4,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 5,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 6,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 7,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 8,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 9,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            }
        ],
    },
    {
        "dayName": "FRI",
        "periodTeacherClasSubjectList": [
            {
                "period": 1,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "anu",
                "teacherName": "anuKrish"
            },
            {
                "period": 2,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 3,
                "subjectName": "ENGLISH",
                "subjectShortName": "ENG",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 4,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 5,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 6,
                "subjectName": "HINDI",
                "subjectShortName": "HIN",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ALB",
                "teacherName": "ALBIN"
            },
            {
                "period": 7,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            },
            {
                "period": 8,
                "subjectName": "Science",
                "subjectShortName": "Sci",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ath",
                "teacherName": "athira"
            },
            {
                "period": 9,
                "subjectName": "MALAYALAM",
                "subjectShortName": "MAL",
                "className": "3-E",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "ash",
                "teacherName": "ashly"
            }
        ],
    },
    {
        "dayName": "SAT",
        "periodTeacherClasSubjectList": [
            {
                "period": 1,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 2,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 3,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 4,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 5,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 6,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 7,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 8,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            },
            {
                "period": 9,
                "subjectName": "",
                "subjectShortName": "",
                "className": "",
                "isSubstituted": false,
                "time": "",
                "teacherShortName": "",
                "teacherName": ""
            }
        ],
        
    }
]
this.setState({data:d})
console.log(d.length,"array")
  }



  render() {
    return (
      <div>
        <div>
          <Tabs
           
            tabPosition="horizontal"
            style={{ height: "auto" }}
            tabBarStyle={{ backgroundColor: "#35356e", color: "#fff" }}
          >
           {this.state.data.map((item,index)=>(<TabPane key={index} tab={item.dayName}>
            {item.periodTeacherClasSubjectList.map(item=>(
              <Card subjectName={item.subjectName} teacherName={item.teacherName} period={item.period}/>
            ))}
</TabPane>)) 
           }
          </Tabs>
        </div>
      </div>
    );
  }
}