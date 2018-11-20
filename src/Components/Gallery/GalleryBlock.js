import React, { Component } from "react";
import { galleryBaseUrl } from "../../Api";
import { Modal } from "antd";

export default class GalleryBlock extends Component {
  state = {
    preview: false
  };

  handleCancel = () => {
    this.setState({ preview: false });
  };

  letPreview = () => {
    this.setState({ preview: true });
  };
  render() {
    const preview = this.state.preview;
    return (
      <div className="gallery-card" style={{margin : "8px"}}>
        <img
          src={galleryBaseUrl + this.props.url}
          width={80}
          height={80}
          onClick={this.letPreview}
        />
        <Modal visible={preview} footer={null} onCancel={this.handleCancel}>
          <img src={galleryBaseUrl + this.props.url} width="100%" />
        </Modal>
      </div>
    );
  }
}
