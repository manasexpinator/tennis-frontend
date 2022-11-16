import React, { Component, Fragment, useState } from "react";
import HeaderNew from "../components/HeaderNew";
import Leftnav from "../components/Leftnav";
import Slider from "react-slick";
import { Button } from "react-bootstrap";
import Lightbox from "react-image-lightbox";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MemberTab from "../components/MemberTab";

export default function Clublisting() {
  const [isOpen, setisOpen] = useState(false);
  const [tab1, settab1] = useState();
  const slideList = [
    {
      imageUrl: "hotel.png",
      name: "product-image ",
    },
    {
      imageUrl: "hotel.png",
      name: "product-image ",
    },
    {
      imageUrl: "hotel.png",
      name: "product-image ",
    },
  ];
  const hotelsettings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 2,
    centerMode: false,
    variableWidth: false,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const GroupList = [
    {
      imageUrl: "user.png",
      name: "Aliqa Macale",
      public: "Public",
      meetup: "Meet up",
      connections: "55.7k",
      follower: "105k",
      following: "71k",
      badge1: "top-student.svg",
      badge2: "onfire.svg",
      badge3: "",
      badge4: "fast-graduate.svg",
      bgImage: "group.png",
    },
  ];
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
  ];
  return (
    <div>
      <Fragment>
        <HeaderNew />
        <>
          <Leftnav />
        </>
        <div className="main-content club-listing-content right-chat-active">
          <div className="middle-sidebar-bottom">
            <div className="middle-sidebar-left pe-0">
              <div className="row">
                <div className="col-xl-12 col-xxl-12 col-lg-12">
                  <Slider {...hotelsettings}>
                    {slideList.map((value, index) => (
                      <div key={index} className="pe-2">
                        <img
                          src={`assets/images/${value.imageUrl}`}
                          alt="avater"
                          className="rounded-3 img-fluid"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
              <div className="row  mt-5">
                <div className="col-xl-8 col-xxl-8 col-lg-8">
                  <h4 className="text-black fw-bold fs-2">
                    Aintree Tennis Club
                  </h4>
                  <p className="fs-6 text-black-50 lh-sm">
                    Aintree Tennis Club is a family orientated club that
                    welcomes all. We feature 10 hardcourts
                    <br /> and 2 are open for public use. 8 courts can only be
                    booked by members.
                  </p>
                  <p className="fs-6 text-black-50 lh-sm">
                    <img src="assets/images/location_icon.png" />
                    Frontier Park, Aintree Victoria Australia 3336
                  </p>

                  <div className="d-flex w-50">
                    <p className="text-black-50">
                      <img className="me-2" src="assets/images/court.png" />
                      10 Hardcourts
                    </p>
                    <p className="ms-auto  text-black-50">
                      <img className="me-2" src="assets/images/light.png" />
                      All Courts have lighting
                    </p>
                  </div>

                  <div className="book-group d-flex align-items-center">
                    <Button className="rounded-xxxl">Book A Court</Button>
                    <Button className="rounded-xxxl ms-5">Memberships</Button>
                    <Button className="bg-transparent border rounded-xxxl ms-5 shadow">
                      <img src="assets/images/message.png" />
                    </Button>
                    <Button className="bg-transparent border rounded-xxxl ms-5 shadow">
                      <img src="assets/images/website.png" />
                    </Button>
                  </div>
                  <div>
                    <img className="w-100 mt-5" src="assets/images/map.png" />
                    <div className="d-block border-0 rounded-3 overflow-hidden   mt-4">
                      <h2 className="fw-700 font-sm mb-3 mt-1 ps-1 mb-3">
                        Gallery
                      </h2>
                      <div className="row ps-3 pe-3">
                        {TabOne.map((value, index) => (
                          <div
                            className="col-sm-4 col-xss-4 pe-1 ps-1 mb-2"
                            key={index}
                          >
                            {isOpen && (
                              <Lightbox
                                mainSrc={TabOne[tab1].bigImage}
                                onCloseRequest={() => setisOpen(false)}
                                onMovePrevRequest={() =>
                                  settab1(
                                    (tab1 + TabOne.length - 1) % TabOne.length
                                  )
                                }
                                onMoveNextRequest={() =>
                                  settab1((tab1 + 1) % TabOne.length)
                                }
                              />
                            )}

                            <div
                              onClick={() => {
                                setisOpen(true);
                                settab1(index);
                              }}
                            >
                              <a href="#portfolio-details">
                                <img
                                  src={`${value.bigImage}`}
                                  alt="Portfolio"
                                  className="w-100"
                                />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="row review-part mt-4">
                      <Col sm="12" lg="4" className="lg:mb-0 xs:mb-3">
                        <div className="section full mb-4 p-4 bg-light theme-dark-bg theme-light-bg rounded-3">
                          <div className="row">
                            <div className="col-12 text-center">
                              <h2 className="display2-size lh-1 m-0 text-grey-900 fw-700">
                                4.3
                              </h2>
                            </div>
                            <div className="col-12 text-center">
                              <h4 className="font-xssss text-grey-600 fw-600 mt-2">
                                Based on 433 rating
                              </h4>
                            </div>
                          </div>
                          <div className="row mt-3">
                            <div className="col-7 pe-1 mt-0">
                              <div className="star d-inline text-left">
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                              </div>
                            </div>
                            <div className="col-5 ps-1 text-right">
                              <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                                Support
                              </h4>
                            </div>
                          </div>
                          <div className="row mt-1">
                            <div className="col-7 pe-1 mt-0">
                              <div className="star d-inline text-left">
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star-disable.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star-disable.png"
                                  alt="star"
                                  className="w15"
                                />
                              </div>
                            </div>
                            <div className="col-5 ps-1 text-right">
                              <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                                Clean
                              </h4>
                            </div>
                          </div>
                          <div className="row mt-1">
                            <div className="col-7 pe-1 mt-0">
                              <div className="star d-inline text-left">
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star-disable.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star-disable.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star-disable.png"
                                  alt="star"
                                  className="w15"
                                />
                              </div>
                            </div>
                            <div className="col-5 ps-1 text-right">
                              <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                                Speed
                              </h4>
                            </div>
                          </div>
                          <div className="row mt-1">
                            <div className="col-7 pe-1 mt-0">
                              <div className="star d-inline text-left">
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star-disable.png"
                                  alt="star"
                                  className="w15"
                                />
                              </div>
                            </div>
                            <div className="col-5 ps-1 text-right">
                              <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                                Quality
                              </h4>
                            </div>
                          </div>
                          <div className="row mt-1">
                            <div className="col-7 pe-1 mt-0">
                              <div className="star d-inline text-left">
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star.png"
                                  alt="star"
                                  className="w15"
                                />
                                <img
                                  src="assets/images/star-disable.png"
                                  alt="star"
                                  className="w15"
                                />
                              </div>
                            </div>
                            <div className="col-5 ps-1 text-right">
                              <h4 className="font-xssss mt-1 fw-700 text-grey-800">
                                Delivery
                              </h4>
                            </div>
                          </div>
                        </div>
                        <Button className="bg-grey rounded-xxxxl border-0 w-75 d-block mx-auto text-black">
                          Add review
                        </Button>
                      </Col>

                      <Col sm="12" lg="8">
                        <div className="row">
                          <div className="d-flex">
                            <div className="col-2 text-left">
                              <figure className="avatar float-left mb-0 w-100">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="float-right shadow-none"
                                />
                              </figure>
                            </div>
                            <div className="col-10 ps-2">
                              <div className="content">
                                <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                                  Goria Coast
                                </h6>
                                <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                                  July 26 at 8:20 PM
                                </h6>
                                <div className="star d-block w-100 text-left">
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star-disable.png"
                                    alt="star"
                                    className="w10"
                                  />
                                </div>
                                <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                                  Enjoyed this a lot and well done. We are an
                                  early stage digitally native vertical brand,
                                  making travel bags.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="d-flex">
                            <div className="col-2 text-left">
                              <figure className="avatar float-left mb-0 w-100">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="float-right shadow-none"
                                />
                              </figure>
                            </div>
                            <div className="col-10 ps-2">
                              <div className="content">
                                <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                                  Goria Coast
                                </h6>
                                <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                                  July 26 at 8:20 PM
                                </h6>
                                <div className="star d-block w-100 text-left">
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star-disable.png"
                                    alt="star"
                                    className="w10"
                                  />
                                </div>
                                <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                                  Enjoyed this a lot and well done. We are an
                                  early stage digitally native vertical brand,
                                  making travel bags.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="row">
                          <div className="d-flex">
                            <div className="col-2 text-left">
                              <figure className="avatar float-left mb-0 w-100">
                                <img
                                  src="assets/images/user.png"
                                  alt="avater"
                                  className="float-right shadow-none"
                                />
                              </figure>
                            </div>
                            <div className="col-10 ps-2">
                              <div className="content">
                                <h6 className="author-name font-xssss fw-600 mb-0 text-grey-800">
                                  Goria Coast
                                </h6>
                                <h6 className="d-block font-xsssss fw-500 text-grey-500 mt-2 mb-0">
                                  July 26 at 8:20 PM
                                </h6>
                                <div className="star d-block w-100 text-left">
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star.png"
                                    alt="star"
                                    className="w10"
                                  />
                                  <img
                                    src="assets/images/star-disable.png"
                                    alt="star"
                                    className="w10"
                                  />
                                </div>
                                <p className="comment-text lh-24 fw-500 font-xssss text-grey-500 mt-2">
                                  Enjoyed this a lot and well done. We are an
                                  early stage digitally native vertical brand,
                                  making travel bags.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-xxl-4 col-lg-4 xs:ps-4 lg:ps-0">
                  <h4 className="text-black fw-bold">Group</h4>
                  {GroupList.map((value, index) => (
                    <div key={index} className="">
                      <div
                        className="card d-block group-col border p-1 shadow-xss overflow-hidden mb-3"
                        style={{ borderRadius: "12px" }}
                      >
                        <div
                          className="card-body position-relative h150 bg-image-cover bg-image-center"
                          style={{
                            backgroundImage: `url("assets/images/${value.bgImage}")`,
                          }}
                        ></div>
                        <div className="card-body d-block w-100 p-4 text-center position-relative ">
                          <figure
                            className="avatar ms-auto me-auto mb-0 position-absolute w90 z-index-1 left-0 right-0"
                            style={{ marginTop: `-70px` }}
                          >
                            <img
                              src={`assets/images/${value.imageUrl}`}
                              alt="avater"
                              className="float-right p-1 bg-white  w-100"
                              style={{ borderRadius: "12px" }}
                            />
                          </figure>

                          <div className="clearfix"></div>
                          <h4 className="fw-700 font-xss mt-4 mb-0">
                            {value.name}{" "}
                          </h4>
                          <p className="fw-500 font-xssss text-grey-500 mt-0 mb-3 item-meta">
                            <span class="group-visibility public">
                              {value.public}
                            </span>
                            <span class="group-type bb-current-group-meetups">
                              {value.meetup}
                            </span>
                          </p>
                          <ul className="d-flex align-items-center justify-content-center mt-1 grp-list">
                            <li className="m-2">
                              <h4 className="fs-5 fw-500 mt-1 text-black-50 d-block">
                                <span className="fs-5 fw-500 mt-1 text-black-50 d-block">
                                  Posts
                                </span>
                                {value.connections}{" "}
                              </h4>
                            </li>
                            <li className="m-2">
                              <h4 className="fs-5 fw-500 mt-1 text-black-50 d-block">
                                <span className="fs-5 fw-500 mt-1 text-black-50 d-block">
                                  Members
                                </span>
                                {value.follower}{" "}
                              </h4>
                            </li>
                            <li className="m-2">
                              <h4 className="fs-5 fw-500 mt-1 text-black-50 d-block">
                                <span className="fs-5 fw-500 mt-1 text-black-50 d-block">
                                  Visits
                                </span>
                                {value.following}{" "}
                              </h4>
                            </li>
                          </ul>
                          <ul className="d-flex align-items-center justify-content-center mt-1 groupUsers">
                            {value.badge1 ? (
                              <li className="m-1">
                                <img
                                  src={`assets/images/${value.badge1}`}
                                  alt="icon"
                                />
                              </li>
                            ) : (
                              ""
                            )}
                            {value.badge2 ? (
                              <li className="m-1">
                                <img
                                  src={`assets/images/${value.badge2}`}
                                  alt="icon"
                                />
                              </li>
                            ) : (
                              ""
                            )}
                            {value.badge3 ? (
                              <li className="m-1">
                                <img
                                  src={`assets/images/${value.badge3}`}
                                  alt="icon"
                                />
                              </li>
                            ) : (
                              ""
                            )}
                            {value.badge4 ? (
                              <li className="m-1">
                                <img
                                  src={`assets/images/${value.badge4}`}
                                  alt="icon"
                                />
                              </li>
                            ) : (
                              ""
                            )}
                          </ul>
                          <a
                            href="#follow"
                            className="mt-4 p-0 btn p-2 lh-sm w100 mx-auto ls-3 d-flex align-items-center rounded bg-grey font-xsssss fw-700 ls-lg text-black"
                          >
                            <i class="feather-check font-xss"></i>
                            Organizer
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="member-tab d-flex align-items-center mb-2 mt-4 pt-4 border-top">
                    <h4 className="fw-bold text-black mb-0">
                      Member{" "}
                      <span className="fs-6"> Of Aintree Tennis Club</span>
                    </h4>
                    <button className="mbr-next text-uppercase ms-auto border-0 rounded bg-transparent ps-3 pr-0 text-black fw-bold">
                      all member <img src="assets/images/mt-icon.png" />
                    </button>
                  </div>
                  <MemberTab />

                  <div class="w-100  border-top mt-4">
                    <div class="card-body d-flex align-items-center py-4 px-0">
                      <h4 class="fw-700 mb-0 font-xssss text-grey-900">
                        Events
                      </h4>
                      <a
                        href="/defaultevent"
                        class="fw-600 ms-auto font-xssss text-primary"
                      >
                        See all
                      </a>
                    </div>
                    <div class="card-body d-flex pt-0 px-0 pb-3 overflow-hidden">
                      <div class="bg-success me-2 p-3 rounded-xxl bg-warning">
                        <h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                          <span class="ls-1 d-block font-xsss text-white fw-600">
                            APR
                          </span>
                          13
                        </h4>
                      </div>
                      <h4 class="fw-700 text-grey-900 font-xssss mt-2">
                        Meeting with clients{" "}
                        <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                          41 madison ave, floor 24 new work, NY 10010
                        </span>{" "}
                      </h4>
                    </div>
                    <div class="card-body d-flex pt-0 px-0 pb-0 overflow-hidden">
                      <div class="bg-success me-2 p-3 rounded-xxl bg-primary">
                        <h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                          <span class="ls-1 d-block font-xsss text-white fw-600">
                            APR
                          </span>
                          22
                        </h4>
                      </div>
                      <h4 class="fw-700 text-grey-900 font-xssss mt-2">
                        Developer Programe{" "}
                        <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                          41 madison ave, floor 24 new work, NY 10010
                        </span>{" "}
                      </h4>
                    </div>
                    <div class="card-body d-flex px-0  pb-3 overflow-hidden">
                      <div class="bg-success me-2 p-3 rounded-xxl bg-success">
                        <h4 class="fw-700 font-lg ls-3 lh-1 text-white mb-0">
                          <span class="ls-1 d-block font-xsss text-white fw-600">
                            APR
                          </span>
                          30
                        </h4>
                      </div>
                      <h4 class="fw-700 text-grey-900 font-xssss mt-2">
                        Aniversary Event{" "}
                        <span class="d-block font-xsssss fw-500 mt-1 lh-4 text-grey-500">
                          41 madison ave, floor 24 new work, NY 10010
                        </span>{" "}
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
