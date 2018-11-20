import React, { Component } from "react";
import "./index.css";

export default class GalleryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      gallery: []
    };
  }
  componentDidMount() {
    console.log(this.props.date);
    this.setState({ date: this.props.date, gallery: this.props.gallery });
  }
  render() {
    return (
      <div className="gallery-main">
        // <h3>{this.state.date}</h3>
        <div className="gallery-images">
          {this.state.gallery.map(f => (
            <div className="gallery-card">{f}</div>
          ))}
        </div>
      </div>
    );
  }
}
