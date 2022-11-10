import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

const memberList = [
  {
    imageUrl: "user.png",
    name: "Aliqa Macale ",
    user: "Female, Age 42 Aintree, Victoria Australia",
  },
  {
    imageUrl: "user.png",
    name: "Hedrix Stamp",
    user: "Female, Age 42 Aintree, Victoria Australia",
  },
  {
    imageUrl: "user.png",
    name: "Stephen Grider ",
    user: "Female, Age 42 Aintree, Victoria Australia",
  },
  {
    imageUrl: "user.png",
    name: "Hurin Seary ",
    user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
    lact: "Last Active 10/10/2022",
    fcount: "Friends: 50",
  },
  // {
  //   imageUrl: "user.png",
  //   name: "Victor Exrixon ",
  //   user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
  //   lact: "Last Active 10/10/2022",
  //   fcount: "Friends: 50",
  // },
  // {
  //   imageUrl: "user.png",
  //   name: "Surfiya Zakir ",
  //   user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
  //   lact: "Last Active 10/10/2022",
  //   fcount: "Friends: 50",
  // },
  // {
  //   imageUrl: "user.png",
  //   name: "Goria Coast ",
  //   user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
  //   lact: "Last Active 10/10/2022",
  //   fcount: "Friends: 50",
  // },
  // {
  //   imageUrl: "user.png",
  //   name: "Hurin Seary ",
  //   user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
  //   lact: "Last Active 10/10/2022",
  //   fcount: "Friends: 50",
  // },
  // {
  //   imageUrl: "user.png",
  //   name: "Surfiya Zakir ",
  //   user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
  //   lact: "Last Active 10/10/2022",
  //   fcount: "Friends: 50",
  // },
  // {
  //   imageUrl: "user.png",
  //   name: "Goria Coast ",
  //   user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
  //   lact: "Last Active 10/10/2022",
  //   fcount: "Friends: 50",
  // },
  // {
  //   imageUrl: "user.png",
  //   name: "Hurin Seary ",
  //   user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
  //   lact: "Last Active 10/10/2022",
  //   fcount: "Friends: 50",
  // },
  // {
  //   imageUrl: "user.png",
  //   name: "Aliqa Macale ",
  //   user: "Male, Age 37, R/H Vic, Melbourne Australia Aintree Tennis Club",
  //   lact: "Last Active 10/10/2022",
  //   fcount: "Friends: 50",
  // },
];

class FriendsTabGrid extends Component {
  render() {
    return (
      <Fragment>
        {memberList.map((value, index) => (
          <div key={index} className="col-md-3 col-sm-4 pe-2 ps-2">
            <div className="card d-block border-0 shadow-xss rounded-3  mb-3">
              <div className="card-body d-block w-100 ps-3 pe-3 pb-4 text-center">
                <div className="d-flex position-absolute p-2 connect">
                  <button className="border rounded  bg-white text-black fs-6 px-2 text-capitalize">
                    my connection
                  </button>
                  <button className="border rounded  bg-gray text-black fs-6 px-2 text-capitalize ms-3">
                    requests
                  </button>
                </div>
                <figure className="overflow-hidden avatar ms-auto me-auto mb-0 position-relative w65 z-index-1">
                  <img
                    src={`assets/images/${value.imageUrl}`}
                    alt="avater"
                    className="float-right p-0 bg-white rounded-circle w-100 shadow-xss"
                  />
                </figure>
                <Link
                  className="text-capitalize text-black rounded-xl  fw-bold fs-6 player px-2  position-absolute"
                  to="#"
                >
                  player
                </Link>
                <div className="clearfix w-100"></div>
                <h4 className="fw-700 font-xsss mt-4 mb-0">{value.name} </h4>
                <p className="fw-500 font-xssss text-grey-50 mt-1 mb-2 lh-sm">
                  {value.user}
                </p>

                <div class="d-flex about-btns justify-content-center">
                  <button class="text-white border-0  py-1 rounded-xl px-1 lh-sm fw-bold">
                    Aintree Tennis Club
                  </button>
                  <button class="text-white border-0 ms-1 py-1 px-1 rounded-xl lh-sm fw-bold">
                    Greenvale Tennis Club
                  </button>
                </div>

                <div className="d-flex justify-content-center my-3">
                  <button class="text-white border-0  py-1 px-1 rounded-xl lh-sm fs-6 utr fw-bold w-25 px-2 fs-6">
                    UTR 9
                  </button>
                  <button class="text-white border-0 ms-2 py-1 px-1 rounded-xl lh-sm fs-6 ntpr fw-bold w-25 px-2">
                    NTRP 5
                  </button>
                  <button class="text-white border-0 ms-2 py-1 px-1 rounded-xl lh-sm fs-6 tm-btn fw-bold w-25">
                    TM | 205
                  </button>
                </div>

                <div class="d-flex">
                  <button class="red-btn fs-6 rounded-xl px-1 fw-bold border-0 text-white">
                    NSJTA | A Special 1
                  </button>
                  <button class="red-btn fs-6 rounded-xl px-1 fw-bold ms-2 border-0 text-white">
                    Pennant | Grade 1
                  </button>
                </div>

                <button class="Superstars fs-6 rounded-xl px-3 fw-bold mt-2 border-0 text-white">
                  Superstars Tennis Academy
                </button>

                <div className="d-flex justify-content-between icon-grps  mt-5">
                  <a
                    href="/defaultmember"
                    className="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-sm ms-1 ls-3 d-inline-block rounded-xxxl border font-xsssss fw-700 ls-lg text-white"
                  >
                    <i class="feather-user-check font-md"></i>
                  </a>

                  <a
                    href="/defaultmember"
                    className="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-sm ms-1 ls-3 d-inline-block rounded-xxxl  border font-xsssss fw-700 ls-lg text-white"
                  >
                    <i class="feather-message-square font-md"></i>
                  </a>

                  <a
                    href="/defaultmember"
                    className="mt-0 btn pt-2 pb-2 ps-3 pe-3 lh-sm ms-1 ls-3 d-inline-block rounded-xxxl  border font-xsssss fw-700 ls-lg text-white"
                  >
                    <i class="feather-gift font-md"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Fragment>
    );
  }
}

export default FriendsTabGrid;
