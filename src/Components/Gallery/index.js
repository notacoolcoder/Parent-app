import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
import { Icon } from "antd" ;
import { galleryAPI } from "./../../Api";
import Block from "./GalleryBlock";
import { parseString } from "xml2js";
import { Redirect } from "react-router-dom";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          date: "23/23/232",
          gallery: [1, 2, 3, 4, 5, 6, 7, 8]
        },
        {
          date: "12/23/43",
          gallery: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
        },
        {
          date: "23/34/23",
          gallery: [21, 22, 23, 24]
        }
      ],
      schoolCode: localStorage.getItem("schoolID"),
      gallery: [] ,
      galleryString : [] ,
      redirect:false,
      value:''
    };
  }

  componentDidMount() {
    var that = this;
    const schoolCode = this.state.schoolCode;
    fetch(galleryAPI + schoolCode + "/")
      .then(respose => {
        console.log("res", respose);

        return respose.text();
      })

      .then(value => {
        parseString(value, { explicitArray: false }, (err, result) => {
          //console.log("Res", result.ListBucketResult.Contents);
          const dat = result.ListBucketResult.CommonPrefixes;
          that.setState({ gallery: result.ListBucketResult.CommonPrefixes });
          console.log("hghg",dat);
          var array = [];
          dat.map(item => {
            var name= item.Prefix.split("/")
            array.push(name[name.length-2])

          })
          that.setState({galleryString : array})
          console.log("galleryString" , array);
        });
      });

  }

  gotoGallery = (item) => {
    console.log("item" , item);
    this.setState({value:item,redirect:true})

  }

  render() {
    var value = this.state.value ;
    return (
      <div
        style={{
          width : "100%",
          padding: "5px",
          display: "flex",
          margin: "10px",
          flexDirection : "column" ,
          justifyContent: "center"
        }}
      >
        {
          this.state.galleryString.map( item => (
            <div onClick={e => this.gotoGallery(item)} style={{display : "flex" , flexDirection : "row"}}>
              <Icon style={{fontSize : "35px" , margin : "10px" , color : "#08c"}} type="folder-open" />
              <div style={{display : "flex" , alignItems : "center"}}>{item}</div>
            </div>
          ))
        }

        {/* {this.state.data.map(s => (
          <GalleryCard date={s.date} gallery={s.gallery} />
        ))} */}
        {this.state.redirect?<Redirect to={"/"+this.state.value}/>:null}
      </div>
    );
  }
}
export default Gallery;
