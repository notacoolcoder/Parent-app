import React from 'react' ;
import './index.css' ;
import { Icon , Dropdown } from 'antd' ;
import image from '../../Res/croupier.png';

export default class Profile extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      student : [
      {
        studentName : "Megha Rose",
        studentCodeNo : "1035/14" ,
        class : "X",
        division : "A",
        bloodGroup : "B",
        fatherName : "Dr. Jayan Joseph",
        fatherOccupation : "Surgoen" ,
        fatherContact : "9444444444",
        motherName : "Adv. Sony Francis",
        motherOccupation : " Vetenery Surgoen" ,
        motherContact : "9444444444",
        address :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ex in quam suscipit varius id ac mi",
      },
      {
        studentName : "Megha Rose",
        studentCodeNo : "1035/14" ,
        class : "X",
        division : "A",
        bloodGroup : "B",
        fatherName : "Dr. Jayan Joseph",
        fatherOccupation : "Surgoen" ,
        fatherContact : "9444444444",
        motherName : "Adv. Sony Francis",
        motherOccupation : " Vetenery Surgoen" ,
        motherContact : "9444444444",
        address :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ex in quam suscipit varius id ac mi",
      },
    ],
    studentName : "Megha Rose",
    studentCodeNo : "1035/14" ,
    class : "X",
    division : "A",
    bloodGroup : "B",
    fatherName : "Dr. Jayan Joseph",
    fatherOccupation : "Surgoen" ,
    fatherContact : "9444444444",
    motherName : "Adv. Sony Francis",
    motherOccupation : " Vetenery Surgoen" ,
    motherContact : "9444444444",
    address :"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis ex in quam suscipit varius id ac mi",

    }
  }

  render(){
    const dropdown = (
      <div style={{ width:"360px" , maxWidth: "100%" ,backgroundColor : "#ececec", padding : "10px" , display : "flex" , flexDirection : "column"}}>
        <div style={{display : "flex" , flexDirection : "row"}}>
          <div>Blood</div>
          <div style={{marginLeft : "10px"}}>{this.state.bloodGroup} +ve</div>
        </div>
        <div style={{display : "flex" , flexDirection : "row"}}>
          <div>Father</div>
          <div style={{display : "flex" , flexDirection : "column" , marginLeft : "10px"}}>
            <div>{this.state.fatherName}</div>
            <div>{this.state.fatherOccupation}</div>
          </div>
          <div style={{marginLeft:"10px"}}>Mother</div>
          <div>
            <div style={{marginLeft:"10px"}}>{this.state.motherName}</div>
            <div>{this.state.motherOccupation}</div>
          </div>
        </div>
        <div style={{display : "flex" , flexDirection : "row"}}>
          <div>Mobile</div>
          <div style={{marginLeft:"10px"}}>{this.state.fatherContact}</div>
          <div style={{marginLeft:"50px"}}>{this.state.motherContact}</div>
        </div>
        <div style={{display : "flex" , flexDirection : "row"}}>
          <div>Address</div>
          <div style={{marginLeft : "10px"}}>{this.state.address}</div>
        </div>
      </div>
    );

    return(
      <div className="profileMainDiv">
        {this.state.student.map((student) => {
        return( <Dropdown overlay={dropdown} trigger={['click']}>
            <div className="profileIndDiv">
              <img src={image} style={{ width : '75px' , height : '75px'}}/>
              <div>
                <div>{student.studentName}</div>
                <div>Code No: {student.studentCodeNo}</div>
                <div>class : {student.class} Division : {student.division}</div>
              </div>
              <Icon type="caret-down" theme="outlined" />
            </div>
          </Dropdown>)
        })}
        </div>
    )
  }
}
