import React, { Component, Fragment } from "react";
import PhotosPageTitle from "./PhotosPageTitle";
import PhotosTabAlbum from "./PhotosTabAlbum";
import PhotosTabGrid from "./PhotosTabGrid";

class PhotosTab extends Component {
  constructor() {
    super();
    this.state = { tabes: 1 };
  }
  showTebs = (id) => {
    this.setState({ tabes: id });
  };
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-xl-12">
            <PhotosPageTitle
              active={this.state.tabes}
              showTebs={this.showTebs}
            />

            <div className="row ps-3 pe-3 justify-content-center">
              {this.state.tabes == 1 ? <PhotosTabGrid /> : <PhotosTabAlbum />}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PhotosTab;
