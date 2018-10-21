import React, { Component } from "react";
import GalleryCard from "./GalleryCard";
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
      ]
    };
  }
  render() {
    return (
      <div style={{ padding: "5px" }}>
        {this.state.data.map(s => (
          <GalleryCard date={s.date} gallery={s.gallery} />
        ))}
      </div>
    );
  }
}
export default Gallery;
