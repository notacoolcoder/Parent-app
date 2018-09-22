import React, { Component } from 'react';
import "./index.css"
import { Calendar, Badge } from 'antd';

function getListData(value) {
  let listData;
  switch (value.date()) {
    case 8:
      listData = [
        { type: 'warning', content: 'This is warning event.' },
      ]; break;
    case 10:
      listData = [
        { type: 'warning' },
        
      ]; break;
    case 15:
      listData = [
        { type: 'warning' },
      ]; break;
    default:
  }
  return listData || [];
}

function dateCellRender(value) {
  const listData = getListData(value);
  return (
    <ul className="events">
      {
        listData.map(item => (
          <li key={item.content}>
            <Badge status="success" />
          </li>
        ))
      }
    </ul>
  );
}




export default class  extends Component {

    constructor(props){
      super(props)
    
      
    }
    
    componentDidMount(){
    
    
    }
    
    
      render() {
    
       
    
        return (
          <div className="common-container" >
   <div style={{ width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
    <Calendar fullscreen={false}  dateCellRender={dateCellRender} />
  </div>
          </div>
        );
      }
    }