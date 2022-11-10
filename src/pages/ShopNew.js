import React, { Fragment, Component } from "react";
import Slider from "react-slick";
import Header from "../components/Header";
import HeaderNew from "../components/HeaderNew";
import Leftnav from "../components/Leftnav";
import Rightchat from "../components/Rightchat";

const productList = [
  {
    imageUrl: "product.png",
    name: "Textured Sleeveless Camisole",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Adjustable Shoulder Straps",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Neck Strappy Camisole",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Scoop-Neck Strappy",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Butler Stool Ladder",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Butler Stool Ladder",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Butler Stool Ladder",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Butler Stool Ladder",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Textured Sleeveless Camisole",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Adjustable Shoulder Straps",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Neck Strappy Camisole",
    price: "449",
  },
  {
    imageUrl: "product.png",
    name: "Scoop-Neck Strappy",
    price: "449",
  },
];

class ShopNew extends Component {
  render() {
    const sliderstyle = {
      paddingRight: 20 + "!important",
    };
    const shopsettings = {
      arrows: true,
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 1,
      centerMode: false,
    };

    return (
      <Fragment>
        <HeaderNew />

        {window.location.pathname === "/shopnew" ? null : (
          <>
            <Leftnav />
            <Rightchat />
          </>
        )}
        {/* <Leftnav />
        <Rightchat /> */}

        <div className="container-xl mt-5 pt-4">
          <div className="row mt-5">
            <div className="col-xl-12 col-xxl-12 col-lg-12">
              <div className="row">
                <div className="col-lg-12">
                  <div className="banner-wrapper bg-greylight overflow-hidden rounded-3 shop-slider">
                    <Slider {...shopsettings}>
                      <div className="style1 d-flex align-items-center bg-lightblue">
                        <div className="row">
                          <div
                            className="col-lg-6 ps-0 p-lg-5 pe-2 ps-5 pt-4"
                            style={sliderstyle}
                          >
                            <div className="card w-100 border-0 ps-lg-5 ps-0 bg-transparent bg-transparent-card">
                              <h4 className="font-xssss text-danger ls-3 fw-700 ms-0 mt-4 mb-3">
                                TRENDING
                              </h4>
                              <h2 className="fw-300 display1-size display2-md-size lh-2 text-grey-900">
                                New Arrival Buds <br />{" "}
                                <b className="fw-700">Collection</b>
                              </h2>
                              <p className="fw-500 text-grey-500 lh-26 font-xssss pe-lg-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi nulla dolor, ornare at
                                commodo non, feugiat non nisi. Phasellus
                                faucibus mollis pharetra.
                              </p>
                              <a
                                href="/singleproduct"
                                className="fw-700 text-white rounded-xl bg-primary-gradiant font-xsssss text-uppercase ls-3 lh-30 mt-0 text-center d-inline-block p-2 w150"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <img
                              src="assets/images/product.png"
                              alt="product"
                              className="img-fluid p-md-5 p-4"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="style1 d-flex align-items-center bg-cyan">
                        <div className="row">
                          <div
                            className="col-lg-6 ps-0 p-lg-5 pe-2 ps-5 pt-4"
                            style={sliderstyle}
                          >
                            <div className="card w-100 border-0 ps-lg-5 ps-0 bg-transparent bg-transparent-card">
                              <h4 className="font-xssss text-white ls-3 fw-700 ms-0 mt-4 mb-3">
                                TRENDING
                              </h4>
                              <h2 className="fw-300 display1-size display2-md-size lh-2 text-white">
                                New Arrival Buds <br />{" "}
                                <b className="fw-700">Collection</b>
                              </h2>
                              <p className="fw-500 text-grey-100 lh-26 font-xssss pe-lg-5">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Morbi nulla dolor, ornare at
                                commodo non, feugiat non nisi. Phasellus
                                faucibus mollis pharetra.
                              </p>
                              <a
                                href="/singleproduct"
                                className="fw-700 text-grey-900 rounded-xl bg-white font-xsssss text-uppercase ls-3 lh-30 mt-0 text-center d-inline-block p-2 w150"
                              >
                                Shop Now
                              </a>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <img
                              src="assets/images/product.png"
                              alt="product"
                              className="img-fluid p-md-5 p-4"
                            />
                          </div>
                        </div>
                      </div>
                    </Slider>
                  </div>
                </div>

                <div className="col-lg-12 mt-3">
                  <h4 className="float-left font-xssss fw-700 text-grey-500 text-uppercase ls-3 mt-2 pt-1">
                    32 Product found
                  </h4>
                  <select className="searchCat float-right sort">
                    <option value="">Default Sorting</option>
                    <option value="151781441596 ">Fashion</option>
                    <option value="139119624252 ">- Men</option>
                    <option value="139118313532 ">- Women</option>
                    <option value="139360141372 ">Electronics</option>
                    <option value="152401903676 ">Home &amp; Garden</option>
                    <option value="138866720828 ">- Decor</option>
                    <option value="138866917436 ">- Lighting</option>
                  </select>
                </div>

                {productList.map((value, index) => (
                  <div key={index} className="col-lg-4 col-md-6">
                    <div className="card w-100 border-0 mt-4">
                      <div className="card-image w-100 p-0 text-center bg-greylight rounded-3 mb-2">
                        <a href="/singleproduct">
                          <img
                            src={`assets/images/${value.imageUrl}`}
                            alt="product"
                            className="w-100 mt-0 mb-0 p-5"
                          />
                        </a>
                      </div>
                      <div className="card-body w-100 p-0 text-center">
                        <h2 className="mt-2 mb-1">
                          <a
                            href="/singleproduct"
                            className="text-black fw-700 font-xsss lh-26"
                          >
                            {value.name}
                          </a>
                        </h2>
                        <h6 className="font-xsss fw-600 text-grey-500 ls-2">
                          ${value.price}
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-lg-12 mt-3 mb-5 text-center">
                  <a
                    href="/shop1"
                    className="fw-700 text-white font-xssss text-uppercase ls-3 lh-32 rounded-3 mt-3 text-center d-inline-block p-2 bg-current w150"
                  >
                    Load More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default ShopNew;
