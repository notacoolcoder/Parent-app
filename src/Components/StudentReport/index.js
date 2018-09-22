import React, { Component } from 'react';

import './index.css';
import { Input, Icon, Card } from 'antd';


export default class Box extends Component {

constructor(props){
  super(props)

  
}

componentDidMount(){


}


  render() {

    var items=[]

    for (let i = 0; i < 50; i++) {
      items.push(
        
        <Card num={i}  title="Dhanuchalissei" style={{color:'blue',width:"360px",padding:"10px",margin:"10px"}} >
         <div className="flexb">
        Roll No: #015              
        <img src="https://picsum.photos/120/120/?random" width="30px" height="30px"/>
        </div>
        </Card>
        
        
      )

    }



    

   

    return (
      <div>
         
         
      
        <div style={{display:'flex',flexDirection:'column', width: "95%", maxWidth: "360px", marginTop: 100, marginLeft:300}}>
      {
        items
        
        
      }
      
      
      
      </div>
    
       
      </div>
      
        
      
        
            
        


    )
}
}

//export default Box;
/*
<div className="flexb">
        Roll No: #015              
        <img src="https://picsum.photos/120/120/?random" width="50px" height="50px"/>
        
        </div> */

