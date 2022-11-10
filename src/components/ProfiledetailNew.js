import React, { Component } from "react";
import { Link } from "react-router-dom";

class Profiledetail extends Component {
  render() {
    return (
      <>
        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
          <div className="card-body d-block p-4">
            <h4 className="fw-700 mb-3 font-xsss text-grey-900 ">
              <a
                href="/"
                className="font-xsss fw-700 text-grey-900 card-body p-0 d-flex align-items-center justify-content-between"
              >
                About
                <i className="btn-round-sm font-xs text-primary feather-edit-3 me-2 bg-greylight"></i>
              </a>
            </h4>
            <div className="d-flex">
              <p className="fw-500 text-black-80 lh-24 font-xssss mb-0">
                Male , Age 37
                <br /> Melbourne Victoria Australia
              </p>
              <p className="fs-6 ms-auto">Edit About</p>
            </div>
            <b className="text-black-50">I play at</b>
            <div className="d-flex about-btns">
              <button className="text-white border-0  py-1 rounded-xl px-1 lh-sm fw-bold">
                Aintree Tennis Club
              </button>
              <button className="text-white border-0 ms-1 py-1 px-1 rounded-xl lh-sm fw-bold">
                Greenvale Tennis Club
              </button>
            </div>
            <p className="text-black-50 fw-bold mt-2">
              I am a
              <Link
                className="tenis rounded-xl fs-6 ms-2 text-black px-2 py-1 fw-bold"
                to="#"
              >
                Tennis Player
              </Link>
            </p>
            <p className="text-black-50 fw-bold">
              Playing level
              <br />
              <button className="text-white border-0 ms-1 py-1 px-1 rounded-xl lh-sm fs-6 utr fw-bold w-25 px-2">
                UTR 9
              </button>
              <button className="text-white border-0 ms-1 py-1 px-1 rounded-xl lh-sm fs-6 ntpr fw-bold w-25 px-2">
                NTRP 5
              </button>
            </p>
            <p className="text-black-50 fw-bold mb-1">
              Competition Association & Grade
            </p>
            <div className="d-flex">
              <button className="red-btn fs-6 rounded-xl px-1 fw-bold border-0 text-white">
                NSJTA | A Special 1
              </button>
              <button className="red-btn fs-6 rounded-xl px-1 fw-bold ms-2 border-0 text-white">
                Pennant | Grade 1
              </button>
            </div>
            <button className="red-btn fs-6 rounded-xl px-2 fw-bold mt-2 border-0 text-white">
              WRTA | Section 1
            </button>
          </div>
          {/* <div className="card-body border-top-xs d-flex">
          <i className="feather-lock text-grey-500 me-3 font-lg"></i>
          <h4 className="fw-700 text-grey-900 font-xssss mt-0">
            Private
            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
              What's up, how are you?
            </span>
          </h4>
        </div>

        <div className="card-body d-flex pt-0">
          <i className="feather-eye text-grey-500 me-3 font-lg"></i>
          <h4 className="fw-700 text-grey-900 font-xssss mt-0">
            Visble
            <span className="d-block font-xssss fw-500 mt-1 lh-3 text-grey-500">
              Anyone can find you
            </span>
          </h4>
        </div>
        <div className="card-body d-flex pt-0">
          <i className="feather-map-pin text-grey-500 me-3 font-lg"></i>
          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
            Flodia, Austia
          </h4>
        </div>
        <div className="card-body d-flex pt-0">
          <i className="feather-users text-grey-500 me-3 font-lg"></i>
          <h4 className="fw-700 text-grey-900 font-xssss mt-1">
            Genarel Group
          </h4>
        </div> */}
        </div>
        <div className="card w-100 shadow-xss rounded-xxl border-0 mb-3">
          <div className="card-body d-block p-4">
            <h4 className="fw-700 mb-3 font-xsss text-grey-900 ">
              Descriptions
            </h4>
            <p className="fw-500 text-black-500 lh-24 font-xssss mb-0">
              Hello, I am luke and I am a tennis coach etc
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Profiledetail;
