import React from "react";
import { Button, Col } from "react-bootstrap";

export default function StatPageTab() {
  return (
    <div>
      <div className="row">
        <Col xs="12" lg="8">
          <div className="d-flex lft-part">
            <div className="bg-white rounded-xxl p-3 shadow-sm w-50">
              <h4 className="fw-bold text-black fs-4">My Ratings</h4>
              <h4 className="fw-bold text-black fs-4">UTR | 5.5</h4>
              <h4 className="fw-bold text-black fs-4">NTRP | 5</h4>

              <h4 className="fw-bold text-black fs-4">
                Tennis Mastery Ranking
              </h4>
              <h5 className="fw-bold text-black fs-5 mb-1">Global 500th</h5>
              <h5 className="fw-bold text-black fs-5 mb-1">Australia 25th</h5>
              <h5 className="fw-bold text-black fs-5 mb-1">
                Vic Melbourne 10th
              </h5>
              <h5 className="fw-bold text-black fs-5 mb-1">
                Aintree Tennis Club 1st
              </h5>
            </div>

            <div className="ps-3">
              <div className="d-flex align-items-center">
                <h4 className="text-black fw-bold fs-5">
                  Tennis Mastery Ranking
                </h4>
                <Button className="bg-transparent border fs-6 ms-auto w-25 text-left text-black py-1">
                  Global
                </Button>
              </div>

              <img className="w-100 mt-1" src="assets/images/curve.png" />
            </div>
          </div>
        </Col>

        <Col xs="12" lg="4">
          <div className="bg-white p-3 rounded-xxl shadow-sm">
            <h4 className="text-black fw-bold text-center fs-4 mb-4">
              15 Matches
            </h4>
            <div className="d-flex align-items-center">
              <Button className="bg-transparent border-0 p-0 me-auto">
                <img src="assets/images/w-lft.png" />
              </Button>
              <div className="circle-part border rounded-circle">
                <p className="m-0 text-center fw-black fw-bold fs-4">1/0</p>
              </div>
              <Button className="bg-transparent border-0 p-0 ms-auto">
                <img src="assets/images/w-ryt.png" />
              </Button>
            </div>
            <h4 className="text-black fw-bold text-center fs-4 mt-4">
              100% won
            </h4>
          </div>
        </Col>
      </div>

      <div className="row mt-4">
        <Col xs="12" lg="8">
          <div className="d-flex lft-part">
            <div className="bg-white p-3 rounded-xxl shadow-sm w-50">
              <h4 className="text-black fw-bold text-center fs-4 mb-4">
                Games Difference
              </h4>
              <div className="d-flex align-items-center">
                <Button className="bg-transparent border-0 p-0 me-auto">
                  <img src="assets/images/w-lft.png" />
                </Button>
                <div className="circle-part border rounded-circle">
                  <p className="m-0 text-center fw-black fs-4 fw-bold">
                    100/50
                  </p>
                </div>
                <Button className="bg-transparent border-0 p-0 ms-auto">
                  <img src="assets/images/w-ryt.png" />
                </Button>
              </div>
              <h4 className="fw-bold text-center fs-4 mt-4 green-text">+ 50</h4>
            </div>

            <div className="ps-3">
              <div className="d-flex align-items-center">
                <h4 className="text-black fw-bold fs-5">UTR Rating</h4>
              </div>

              <img className="w-100 mt-1" src="assets/images/curve.png" />
            </div>
          </div>
        </Col>

        <Col xs="12" lg="4">
          <div className="bg-white p-3 rounded-xxl shadow-sm">
            <h4 className="text-black fw-bold text-center fs-4 mb-4">
              24 Sets
            </h4>
            <div className="d-flex align-items-center">
              <Button className="bg-transparent border-0 p-0 me-auto">
                <img src="assets/images/w-lft.png" />
              </Button>
              <div className="circle-part border rounded-circle">
                <p className="m-0 text-center fw-black fs-4 fw-bold">12/12</p>
              </div>
              <Button className="bg-transparent border-0 p-0 ms-auto">
                <img src="assets/images/w-ryt.png" />
              </Button>
            </div>
            <h4 className="text-black fw-bold text-center fs-4 mt-4">
              50 % Won
            </h4>
          </div>
        </Col>
      </div>
    </div>
  );
}
