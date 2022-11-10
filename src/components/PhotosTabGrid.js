import React, { Component, Fragment } from "react";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";

const TabOne = [
  {
    image: "01",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "02",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "03",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "04",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "05",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "06",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "07",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "08",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "09",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "10",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "11",
    bigImage: "assets/images/hotel.png",
  },
  {
    image: "12",
    bigImage: "assets/images/hotel.png",
  },
];

class PhotosTabGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: 0,
      isOpen: false,
    };
  }
  render() {
    const { tab1, isOpen } = this.state;
    return (
      <Fragment>
        <div className="row">
          <div className="col-12 d-flex justify-content-end mb-2">
            <a href="/" class="btn-round-md theme-dark-bg rounded-3">
              <i class="feather-trash-2 font-xs text-red"></i>
            </a>
            <a href="/" class="btn-round-md theme-dark-bg rounded-3">
              <i class="feather-check-circle font-xs text-red"></i>
            </a>
          </div>
          {TabOne.map((value, index) => (
            <div className="col-3 mb-1 p-1" key={index}>
              {isOpen && (
                <Lightbox
                  mainSrc={TabOne[tab1].bigImage}
                  onCloseRequest={() => this.setState({ isOpen: false })}
                  onMovePrevRequest={() =>
                    this.setState({
                      tab1: (tab1 + TabOne.length - 1) % TabOne.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      tab1: (tab1 + 1) % TabOne.length,
                    })
                  }
                />
              )}

              <div onClick={() => this.setState({ isOpen: true, tab1: index })}>
                <a href="#portfolio-details">
                  <img
                    src={`${value.bigImage}`}
                    alt="Portfolio"
                    className="img-fluid rounded-3 w-100"
                  />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}

export default PhotosTabGrid;
