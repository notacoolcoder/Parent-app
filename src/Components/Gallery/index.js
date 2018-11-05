import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
import { galleryAPI } from "./../../Api";
import Block from "./GalleryBlock";
import { parseString } from "xml2js";

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
      gallery: []
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
          result.ListBucketResult.Contents.map(item => {
            console.log("item", item);
          });
          that.setState({ gallery: result.ListBucketResult.Contents });
        });
      });
  }
  render() {
    return (
      <div
        style={{
          padding: "5px",
          display: "flex",
          flexWrap: "wrap",
          margin: "auto",
          justifyContent: "center"
        }}
      >
        {this.state.gallery.map(item => (
          <Block url={item.Key} />
        ))}

        {/* {this.state.data.map(s => (
          <GalleryCard date={s.date} gallery={s.gallery} />
        ))} */}
      </div>
    );
  }
}
export default Gallery;
