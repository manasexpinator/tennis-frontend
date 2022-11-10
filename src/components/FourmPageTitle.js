import React, { Component } from "react";

class FourmPageTitle extends Component {
  render() {
    return (
      <>
        <div className="card shadow-xss w-100 d-block d-flex border-0 p-4 mb-3">
          <h2 className="fw-700 mb-0 mt-0 font-md text-grey-900 d-flex align-items-center flex-lg-row flex-column justify-content-between">
            <ul
              className="nav nav-tabs h55 d-flex flex-nowrap product-info-tab border-bottom-0 align-items-center"
              id="FrTabs"
            >
              <li className="active list-inline-item me-4">
                <a
                  href="#"
                  className="fw-700 font-xssss text-grey-500 pt-3 pb-3 ls-1 d-inline-block active"
                >
                  Forums
                </a>
              </li>
            </ul>
            <div className="d-flex">
              <form action="#" className="pt-0 pb-0 ms-2">
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
        </div>
        <ul class="nav nav-pills mb-3" id="pills-tab-form" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-home"
              type="button"
              role="tab"
              aria-controls="pills-home"
              aria-selected="true"
            >
              My Discussions
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-profile"
              type="button"
              role="tab"
              aria-controls="pills-profile"
              aria-selected="false"
            >
              My Replies
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              My Favorites
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              Subscriptions
            </button>
          </li>

          <li
            className="nav-item text-black bg-grey rounded"
            role="presentation"
          >
            <button
              class="nav-link"
              id="pills-contact-tab"
              data-bs-toggle="pill"
              data-bs-target="#pills-contact"
              type="button"
              role="tab"
              aria-controls="pills-contact"
              aria-selected="false"
            >
              New Discussion
            </button>
          </li>
        </ul>
      </>
    );
  }
}

export default FourmPageTitle;
