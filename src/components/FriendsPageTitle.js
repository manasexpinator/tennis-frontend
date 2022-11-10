import React, { Component } from "react";

class FriendsPageTitle extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="card shadow-xss w-100 d-flex border-0 p-4 mb-2">
        <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900 d-flex flex-lg-row flex-column align-items-center justify-content-between pb-3 mb-3 border-bottom shadow-xs">
          <ul
            className="nav nav-tabs h55 d-flex flex-nowrap product-info-tab border-bottom-0 align-items-center"
            id="FrTabs"
          >
            <li className="active list-inline-item me-4">
              <a
                onClick={() => this.props.showRequests(1)}
                href="#"
                className={
                  this.props.active == 1
                    ? "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                }
              >
                Friends
              </a>
            </li>
            {/* 
            <li className="active list-inline-item me-4">
              <a
                onClick={() => this.props.showRequests(2)}
                href="#"
                className={
                  this.props.active == 2
                    ? "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                    : "fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block"
                }
              >
                Requests
              </a>
            </li> */}
          </ul>
          <div className="d-flex">
            <form action="#" className="pt-0 pb-0 ms-auto">
              <div className="search-form-2 ms-2">
                <i className="ti-search font-xss"></i>
                <input
                  type="text"
                  className="form-control text-grey-500 mb-0 bg-greylight theme-dark-bg border-0"
                  placeholder="Search here."
                />
              </div>
            </form>
            <a
              href="/"
              className="btn-round-md ms-2 bg-greylight theme-dark-bg rounded-3"
            >
              <i className="feather-filter font-xss text-grey-500"></i>
            </a>
          </div>
        </h2>
        <div className="d-flex">
          <button className="fs-6 rounded border text-black py-1 px-2 bg-white">
            My Friends
          </button>
          <button className="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
            Requests
          </button>
          <button className="fs-6 rounded border-0 text-black px-2 py-1 ms-5">
            All Members
          </button>
        </div>
      </div>
    );
  }
}

export default FriendsPageTitle;
