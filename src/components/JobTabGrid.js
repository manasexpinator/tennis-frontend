import React from "react";
import { Button } from "react-bootstrap";

const JobTabGrid = () => {
  return (
    <div>
      <div className="row mt-3">
        <div className="w-50">
          <div className="job-text d-flex shadow-sm rounded p-3">
            <div className="pe-4">
              <img src="assets/images/smal-img.png" />
            </div>

            <div className="w-100">
              <div className="d-flex">
                <h4 className="text-black fw-bold fs-3">Python Developer </h4>
                <span className="text-black-50  mx-5">(3 days ago)</span>
                <img
                  className="ms-auto ps-5"
                  src="assets/images/wishlist.png"
                />
              </div>
              <p className="text-black-50 mb-0">
                <b className="text-black">Location :</b> London, United kingdom
              </p>

              <p className="text-black-50 mb-0">
                <b className="text-black">Employement :</b> Part Time
              </p>

              <p className="text-black-50 mb-0">
                <b className="text-black">Salary :</b> 12000-45000
              </p>

              <div className="d-flex align-items-center mt-3">
                <div
                  aria-label="Basic example"
                  role="group"
                  class="btn-group d-flex"
                >
                  <button
                    type="button"
                    class="px-1  rounded ux-design text-capitalize border-0 btn btn-primary"
                  >
                    ux design
                  </button>
                  <button
                    type="button"
                    class="px-1  rounded ms-2 andriod text-capitalize border-0 btn btn-primary"
                  >
                    andriod
                  </button>
                  <button
                    type="button"
                    class="px-1 rounded ms-2 developer text-capitalize border-0 btn btn-primary"
                  >
                    developer
                  </button>
                </div>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="w-50">
          <div className="job-text d-flex shadow-sm rounded p-3">
            <div className="pe-4">
              <img src="assets/images/smal-img.png" />
            </div>

            <div className="w-100">
              <div className="d-flex">
                <h4 className="text-black fw-bold fs-3">Python Developer </h4>
                <span className="text-black-50  mx-5">(3 days ago)</span>
                <img
                  className="ms-auto ps-5"
                  src="assets/images/wishlist.png"
                />
              </div>
              <p className="text-black-50 mb-0">
                <b className="text-black">Location :</b> London, United kingdom
              </p>

              <p className="text-black-50 mb-0">
                <b className="text-black">Employement :</b> Part Time
              </p>

              <p className="text-black-50 mb-0">
                <b className="text-black">Salary :</b> 12000-45000
              </p>

              <div className="d-flex align-items-center mt-3">
                <div
                  aria-label="Basic example"
                  role="group"
                  class="btn-group d-flex"
                >
                  <button
                    type="button"
                    class="px-1  rounded ux-design text-capitalize border-0 btn btn-primary"
                  >
                    ux design
                  </button>
                  <button
                    type="button"
                    class="px-1  rounded ms-2 andriod text-capitalize border-0 btn btn-primary"
                  >
                    andriod
                  </button>
                  <button
                    type="button"
                    class="px-1 rounded ms-2 developer text-capitalize border-0 btn btn-primary"
                  >
                    developer
                  </button>
                </div>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-3">
        <div className="w-50">
          <div className="job-text d-flex shadow-sm rounded p-3">
            <div className="pe-4">
              <img src="assets/images/smal-img.png" />
            </div>

            <div className="w-100">
              <div className="d-flex">
                <h4 className="text-black fw-bold fs-3">Python Developer </h4>
                <span className="text-black-50  mx-5">(3 days ago)</span>
                <img
                  className="ms-auto ps-5"
                  src="assets/images/wishlist.png"
                />
              </div>
              <p className="text-black-50 mb-0">
                <b className="text-black">Location :</b> London, United kingdom
              </p>

              <p className="text-black-50 mb-0">
                <b className="text-black">Employement :</b> Part Time
              </p>

              <p className="text-black-50 mb-0">
                <b className="text-black">Salary :</b> 12000-45000
              </p>

              <div className="d-flex align-items-center mt-3">
                <div
                  aria-label="Basic example"
                  role="group"
                  class="btn-group d-flex"
                >
                  <button
                    type="button"
                    class="px-1  rounded ux-design text-capitalize border-0 btn btn-primary"
                  >
                    ux design
                  </button>
                  <button
                    type="button"
                    class="px-1  rounded ms-2 andriod text-capitalize border-0 btn btn-primary"
                  >
                    andriod
                  </button>
                  <button
                    type="button"
                    class="px-1 rounded ms-2 developer text-capitalize border-0 btn btn-primary"
                  >
                    developer
                  </button>
                </div>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobTabGrid;
