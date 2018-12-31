import React from "react";
import "./index.css";
import { galleryAPI, galleryBaseUrl } from "./../../Api";
import { parseString } from "xml2js";
import GalleryBlock from "./../Gallery/GalleryBlock";
import { Link } from "react-router-dom";
import { Icon } from "antd";
import Gallery from "react-grid-gallery";

export default class GallerySub extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      floderName: "",
      schoolCode: localStorage.getItem("schoolID"),
      gallery: [],
      images: []
    };
  }

  componentDidMount() {
    var folder = this.props.match.params.folder;
    var that = this;
    const schoolCode = this.state.schoolCode;
    fetch(galleryAPI + schoolCode + "/" + folder + "/")
      .then(respose => {
        console.log("res", respose);
        return respose.text();
      })

      .then(value => {
        console.log("gallery",value);
        
        parseString(value, { explicitArray: false }, (err, result) => {
          //console.log("Res", result.ListBucketResult.Contents);
          console.log("dat---", result);
          try {
            const images = result.ListBucketResult.Contents;
            var dat = [];
            images.length > 1 ? (dat = images) : dat.push(images);

            that.setState({ gallery: dat });

            console.log("dat", dat);
            this.getImages(dat);
          } catch (err) {}
        });
      });
  }

  getImages = data => {
    const images = [];
    data.map((item, index) => {
      // index > 0
      //   ? images.push({
      //       src: galleryBaseUrl + item.Key,
      //       thumbnail: galleryBaseUrl + item.Key,
      //       thumbnailWidth: 320,
      //       thumbnailHeight: 174
      //     })
      //   : null;
      images.push({
        src: galleryBaseUrl + item.Key,
        thumbnail: galleryBaseUrl + item.Key,
        thumbnailWidth: 80,
        thumbnailHeight: 80
      });
    });
    this.setState({ images });
  };

  render() {
    return (
      <div>
        <Link to="/gallery">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <Icon
              style={{ fontSize: "35px", margin: "10px", color: "#08c" }}
              type="arrow-left"
            />
            <div style={{ display: "flex", alignItems: "center" }}>Go back</div>
          </div>
        </Link>
        {this.state.images.length > 0 ? (
          <Gallery images={this.state.images} showLightboxThumbnails={true} />
        ) : (
          <div style={{ textAlign: "center" }}>No data!</div>
        )}
        {/* <div
          style={{
            padding: "5px",
            display: "flex",
            flexWrap: "wrap",
            margin: "auto",
            justifyContent: "center"
          }}
        >
          {this.state.gallery.map(item => (
            <GalleryBlock url={item.Key} />
          ))}
          
        </div> */}
      </div>
    );
  }
}
