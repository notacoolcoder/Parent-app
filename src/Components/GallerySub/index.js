import React from "react" ;
import "./index.css" ;
import { galleryAPI } from "./../../Api";
import { parseString } from "xml2js";
import GalleryBlock from "./../Gallery/GalleryBlock";
import {Link} from 'react-router-dom'
import {Icon} from 'antd'


export default class GallerySub extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      floderName : "" ,
      schoolCode: localStorage.getItem("schoolID"),
      gallery : [] ,

    }
  }

  componentDidMount(){
    var folder = this.props.match.params.folder ;
    var that = this;
    const schoolCode = this.state.schoolCode;
    fetch(galleryAPI + schoolCode + "/"+ folder + "/")
      .then(respose => {
        console.log("res", respose);
        return respose.text();
      })

      .then(value => {
        parseString(value, { explicitArray: false }, (err, result) => {
          //console.log("Res", result.ListBucketResult.Contents);
          console.log("dat",result);
          const images = result.ListBucketResult.Contents;
          var dat =[]
          images.length>1?(dat = images):dat.push(images)
          that.setState({ gallery: dat });
          console.log("dat",dat);
        });
      });
  }

  render(){
    return(
      <div>
        <Link to="/gallery" >
      <div  style={{display : "flex" , flexDirection : "row"}}>
              <Icon style={{fontSize : "35px" , margin : "10px" , color : "#08c"}} type="arrow-left" />
              <div style={{display : "flex" , alignItems : "center"}}>Go back</div>
          </div>
      </Link>
      <div style={{ padding: "5px", display: "flex", flexWrap: "wrap", margin: "auto", justifyContent: "center" }}>
      {this.state.gallery.map( item => (
        <GalleryBlock url={item.Key}/>
      ))}
      {/* {this.state.data.map(s => (
        <GalleryCard date={s.date} gallery={s.gallery} />
      ))} */}
      </div>
      </div>
    )
  }
}
