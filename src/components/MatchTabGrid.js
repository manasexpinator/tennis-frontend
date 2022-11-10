import React from "react";
import { Col, Row } from "react-bootstrap";

const MatchTabGrid = () => {
  return (
    <div>
      <div className="match-part mx-auto d-block position-relative">
        <Row className="mt-4 bg-white p-3  rounded">
          <Col xs="12" sm="2" className="bg-white px-0">
            <div className="inner-digit d-flex align-items-center justify-content-center">
              <div className="">
                <p className="text-center  text-black fw-bold mb-0 lh-1 high-value">
                  23
                </p>
                <p className="text-center fs-1 text-black fw-bold mb-0 lh-sm text-uppercase">
                  Oct
                </p>
                <p className="text-center fs-6 text-black fw-bold mb-0 lh-sm">
                  07:00 pm
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="10" className="bg-white ps-0">
            <div className="d-flex inner-content   align-items-center border-bottom-main">
              <div className="wd-lft d-flex border-right-main ps-3">
                <div className="d-flex align-items-center">
                  <div>
                    <img src="assets/images/user.png" />
                  </div>
                  <div className="ps-2">
                    <button class="text-white border-0  py-1 px-2 rounded-xl lh-sm fs-6 tm-btn fw-bold">
                      TM | 205
                    </button>
                    <button class="text-white border-0  py-1 px-2 rounded-xl lh-sm fs-6 utr fw-bold  px-2 fs-6 ms-2">
                      UTR 9
                    </button>
                    <h4 className="fw-bold text-black mb-0 fs-2 py-1">
                      Luke Hodgkin
                    </h4>
                    <button class="red-btn fs-6 rounded-xl px-2 fw-bold border-0 text-white">
                      NSJTA | A Special 1
                    </button>
                  </div>
                </div>
              </div>
              <div className="wd-ryt ps-5">
                <div className="d-flex">
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1">
                    6
                  </button>
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1 ms-2">
                    6
                  </button>
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1 ms-2">
                    6
                  </button>
                  <button className="px-2 py-2 text-black border-0 ms-1 fw-bold ms-2 fs-6 winner">
                    <i className="d-block feather-check font-md"></i>
                    <span>winner</span>
                  </button>
                </div>
                <button className="border-0 ryt-icon">
                  <i class="d-block feather-chevron-right fw-bold fs-6 bg-white"></i>
                </button>
              </div>
            </div>

            <div className="d-flex inner-content align-items-center">
              <div className="wd-lft d-flex border-right-main ps-3">
                <div className="d-flex align-items-center">
                  <div>
                    <img src="assets/images/user.png" />
                  </div>
                  <div className="ps-3">
                    <button class="text-white border-0  py-1 px-2 rounded-xl lh-sm fs-6 tm-btn fw-bold">
                      TM | 205
                    </button>
                    <button class="text-white border-0 ms-2 py-1 px-1 rounded-xl lh-sm fs-6 ntpr fw-bold w-25 px-2">
                      NTRP 5
                    </button>
                    <button class="text-white border-0  py-1 px-2 rounded-xl lh-sm fs-6 utr fw-bold  px-2 fs-6 ms-2">
                      UTR 9
                    </button>
                    <h4 className="fw-bold text-black mb-0 fs-2 py-1">
                      Luke Hodgkin
                    </h4>
                    <button class="red-btn fs-6 rounded-xl px-2 fw-bold border-0 text-white">
                      NSJTA | A Special 1
                    </button>{" "}
                    <button class="red-btn fs-6 rounded-xl px-2 fw-bold border-0 text-white">
                      NSJTA | A Special 1
                    </button>
                  </div>
                </div>
              </div>
              <div className="wd-ryt ps-5">
                <div className="d-flex">
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1">
                    3
                  </button>
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1 ms-2">
                    3
                  </button>
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1 ms-2">
                    3
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>

      <div className="match-part mx-auto d-block position-relative">
        <Row className="mt-4 bg-white p-3  rounded">
          <Col xs="12" sm="2" className="bg-white px-0">
            <div className="inner-digit d-flex align-items-center justify-content-center">
              <div className="">
                <p className="text-center  text-black fw-bold mb-0 lh-1 high-value">
                  23
                </p>
                <p className="text-center fs-1 text-black fw-bold mb-0 lh-sm text-uppercase">
                  Oct
                </p>
                <p className="text-center fs-6 text-black fw-bold mb-0 lh-sm">
                  07:00 pm
                </p>
              </div>
            </div>
          </Col>
          <Col xs="12" sm="10" className="bg-white ps-0">
            <div className="d-flex inner-content   align-items-center border-bottom-main">
              <div className="wd-lft d-flex border-right-main ps-3">
                <div className="d-flex align-items-center">
                  <div>
                    <img src="assets/images/user.png" />
                  </div>
                  <div className="ps-3">
                    <button class="text-white border-0  py-1 px-2 rounded-xl lh-sm fs-6 tm-btn fw-bold">
                      TM | 205
                    </button>
                    <button class="text-white border-0  py-1 px-2 rounded-xl lh-sm fs-6 utr fw-bold  px-2 fs-6 ms-2">
                      UTR 9
                    </button>
                    <h4 className="fw-bold text-black mb-0 fs-2 py-1">
                      Luke Hodgkin
                    </h4>
                    <button class="red-btn fs-6 rounded-xl px-2 fw-bold border-0 text-white">
                      NSJTA | A Special 1
                    </button>
                  </div>
                </div>
              </div>
              <div className="wd-ryt ps-5">
                <div className="d-flex">
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1">
                    6
                  </button>
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1 ms-2">
                    6
                  </button>
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1 ms-2">
                    6
                  </button>
                  <button className="px-2 py-2 text-black border-0 ms-1 fw-bold ms-2 fs-6 winner">
                    <i className="d-block feather-check font-md"></i>
                    <span>winner</span>
                  </button>
                </div>
                <button className="border-0 ryt-icon">
                  <i class="d-block feather-chevron-right fw-bold fs-6 bg-white"></i>
                </button>
              </div>
            </div>

            <div className="d-flex inner-content align-items-center">
              <div className="wd-lft d-flex border-right-main ps-3">
                <div className="d-flex align-items-center">
                  <div>
                    <img src="assets/images/user.png" />
                  </div>
                  <div className="ps-3">
                    <button class="text-white border-0  py-1 px-2 rounded-xl lh-sm fs-6 tm-btn fw-bold">
                      TM | 205
                    </button>

                    <button class="text-white border-0  py-1 px-2 rounded-xl lh-sm fs-6 utr fw-bold  px-2 fs-6 ms-2">
                      UTR 9
                    </button>
                    <h4 className="fw-bold text-black mb-0 fs-2 py-1">
                      Luke Hodgkin
                    </h4>
                  </div>
                </div>
              </div>
              <div className="wd-ryt ps-5">
                <div className="d-flex">
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1">
                    3
                  </button>
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1 ms-2">
                    3
                  </button>
                  <button className="bg-grey px-4 py-2 text-black border-0 fw-bold fs-1 ms-2">
                    3
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MatchTabGrid;
