import React, { Component } from "react";
import ListDropdown from "../components/ListDropdown";
import FundraiserTab from "../components/FundraiserTab";
import MatchDropdown from "../components/MatchDropdown";

class ProfilecardThree extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="card w-100 border-0 p-0 bg-white shadow-xss rounded-xxl">
        <div className="card-body h250 p-0 rounded-xxl overflow-hidden m-3">
          <img src="https://via.placeholder.com/1200x250.png" alt="avater" />
        </div>
        <div className="card-body p-0 position-relative">
          <figure
            className="avatar position-absolute w100 z-index-1"
            style={{ top: "-40px", left: "30px" }}
          >
            <img
              src="assets/images/user.png"
              alt="avater"
              className="float-right p-1 bg-white rounded-circle w-100"
            />
          </figure>
          <h4 className="fw-700 font-sm mt-2 mb-lg-3 mb-4 pl-15">
            Mohannad Zitoun
            {/* <span className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-flex justify-content-between w-75">
              Joined Oct 2022
              <div>Sponcer Logo</div>
            </span>
            <span className="fw-500 font-xssss text-grey-500 mt-1 mb-3 d-flex justify-content-between w-75">
              13 Friends
              <div>
                <button className="bg-dark border-0 btn-round-xs float-left">
                  <i className="ti-facebook text-white lh-4 font-xssss"></i>
                </button>
                <button className="bg-dark border-0 btn-round-xs ms-1 float-left">
                  <i className="feather-youtube text-white lh-4 font-xssss"></i>
                </button>
                <button className="bg-dark border-0 btn-round-xs ms-1 float-left">
                  <i className="feather-twitter text-white lh-4 font-xssss"></i>
                </button>
              </div>
            </span> */}
          </h4>
          <div className="social-icons d-flex align-items-center pb-4">
            <a
              href="/defaultemailbox"
              className="rounded-circle  bg-dark p-2 d-flex align-items-center"
            >
              <i className="feather-facebook font-md bg-white rounded-circle p-1 text-black fs-4"></i>
            </a>

            <a
              href="/defaultemailbox"
              className="rounded-circle  bg-dark p-2 d-flex align-items-center ms-3"
            >
              <i className="feather-youtube font-md bg-white rounded-circle p-1 text-black fs-4"></i>
            </a>

            <a
              href="/defaultemailbox"
              className="rounded-circle  bg-dark p-2 d-flex align-items-center ms-3"
            >
              <i className="feather-twitter font-md bg-white rounded-circle p-1 text-black fs-4"></i>
            </a>
          </div>
          <div className="d-flex align-items-center justify-content-center position-absolute-md right-15 top-0 me-2">
            {/* <a
              href="/defaultmember"
              className="d-none d-lg-block bg-success p-3 z-index-1 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
            >
              Play Match
            </a> */}
            {/* <a
              href="/defaultmember"
              className="d-none d-lg-block bg-success p-3 z-index-1 ms-2 rounded-3 text-white font-xsssss text-uppercase fw-700 ls-3"
            >
              Add Friend
            </a> */}

            <a
              href="/defaultemailbox"
              className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
            >
              <i className="feather-user font-md"></i>
            </a>
            <a
              href="/defaultemailbox"
              className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
            >
              <i className="feather-message-square font-md"></i>
            </a>

            <a
              href="/defaultemailbox"
              className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
            >
              <i className="feather-gift font-md"></i>
            </a>
            <a
              href="/home"
              id="dropdownMenu4"
              className="d-none d-lg-block bg-greylight btn-round-lg ms-2 rounded-3 text-grey-700"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="ti-more font-md tetx-dark"></i>
            </a>
            <div
              className="dropdown-menu dropdown-menu-end p-4 rounded-xxl border-0 shadow-lg"
              aria-labelledby="dropdownMenu4"
            >
              <div className="card-body p-0 d-flex">
                <i className="feather-bookmark text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                  Save Link{" "}
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Add this to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-alert-circle text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                  Hide Post{" "}
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-alert-octagon text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 text-grey-900 font-xssss mt-0 me-0">
                  Hide all from Group{" "}
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
              <div className="card-body p-0 d-flex mt-2">
                <i className="feather-lock text-grey-500 me-3 font-lg"></i>
                <h4 className="fw-600 mb-0 text-grey-900 font-xssss mt-0 me-0">
                  Unfollow Group{" "}
                  <span className="d-block font-xsssss fw-500 mt-1 lh-3 text-grey-500">
                    Save to your saved items
                  </span>
                </h4>
              </div>
            </div>
          </div>
        </div>

        <div className="card-body d-block w-100 shadow-none mb-0 p-0 border-top-xs">
          <ul
            className="nav nav-tabs h55 d-flex flex-nowrap product-info-tab  ps-4 border mb-4"
            id="pills-tab"
            role="tablist"
          >
            <li className="active list-inline-item me-5">
              <a
                onClick={() => this.props.tabes(1)}
                className={
                  this.props.active == 1
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs1"
                data-toggle="tab"
              >
                About
              </a>
            </li>
            <li className="list-inline-item me-5">
              <a
                onClick={() => this.props.tabes(2)}
                className={
                  this.props.active == 2
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs2"
                data-toggle="tab"
              >
                Friends
              </a>
            </li>
            <li className="list-inline-item me-5">
              <a
                onClick={() => this.props.tabes(3)}
                className={
                  this.props.active == 2
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs2"
                data-toggle="tab"
              >
                Match
              </a>
              {/* <a
                onClick={() => this.props.tabes(3)}
                className={
                  this.props.active == 3
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs3"
                data-toggle="tab"
              >
                Matches
              </a> */}
              {/* <MatchDropdown
                showdrop={this.props.showdrop}
                drop={this.props.drop}
              /> */}
            </li>
            <li className="list-inline-item me-5">
              <a
                onClick={() => this.props.tabes(4)}
                className={
                  this.props.active == 4
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs4"
                data-toggle="tab"
              >
                Teams
              </a>
            </li>
            <li className="list-inline-item me-5">
              <a
                onClick={() => this.props.tabes(5)}
                className={
                  this.props.active == 5
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs3"
                data-toggle="tab"
              >
                Groups
              </a>
            </li>
            <li className="list-inline-item me-5">
              <a
                onClick={() => this.props.tabes(6)}
                className={
                  this.props.active == 6
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs1"
                data-toggle="tab"
              >
                Discussion
              </a>
            </li>
            <li className="list-inline-item me-5">
              <a
                onClick={() => this.props.tabes(7)}
                className={
                  this.props.active == 7
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs7"
                data-toggle="tab"
              >
                Courses
              </a>
            </li>
            <li className="list-inline-item me-5">
              <a
                onClick={() => this.props.tabes(8)}
                className={
                  this.props.active == 8
                    ? " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : " fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block "
                }
                href="#navtabs1"
                data-toggle="tab"
              >
                Media
              </a>
            </li>

            <ListDropdown showListing={this.props.showListing} />
          </ul>
        </div>
      </div>
    );
  }
}

export default ProfilecardThree;
