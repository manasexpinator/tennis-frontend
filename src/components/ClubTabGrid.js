import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import Court from "../assets/images/court.png";
// import Light from "../assets/images/court.png";

export default function ClubTabGrid() {
  return (
    <div>
      <Button className="bg-grey rounded px-3 text-black border-0 d-flex ms-auto">
        Add Tennis Club
      </Button>
      <Row className="mt-2 g-3">
        <Col xs="12" lg="4">
          <div className="rounded-xl position-relative  border">
            <img className="w-100" src="assets/images/product.png" />
            <Button
              className="border-0  rounded text-white position-absolute featured"
              variant="primary"
            >
              Featured
            </Button>
            <div className="p-3">
              <div className="d-flex w-100 mt-3">
                <div>
                  <div className="">
                    <h4 className="text-capitalize m-0 fw-bold">
                      In2tennis Coaching
                    </h4>
                    <p className="fs-6 text-black-50">
                      Frontier Park Aintree Victoria Australia 3336
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <p className="text-black-50">
                  <img className="ms-1" src="assets/images/court.png" />
                  10 Hardcourts
                </p>
                <p className="ms-auto  text-black-50">
                  <img className="ms-1" src="assets/images/light.png" />
                  All Courts have lighting
                </p>
              </div>

              <div className="d-flex align-items-center mt-2 pb-3">
                <Button className="rounded-pill fs-6 lh-sm text-white px-3 fw-bold member border-0">
                  129 | Members
                </Button>
                <Button className="rounded-pill fs-6 lh-sm text-white px-3 fw-bold aintree border-0 ms-2">
                  22 Teams
                </Button>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button fw-bold"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" lg="4">
          <div className="rounded-xl position-relative  border">
            <img className="w-100" src="assets/images/product.png" />
            <Button
              className="border-0  rounded text-white position-absolute featured"
              variant="primary"
            >
              Featured
            </Button>
            <div className="p-3">
              <div className="d-flex w-100 mt-3">
                <div>
                  <div className="">
                    <h4 className="text-capitalize m-0 fw-bold">
                      In2tennis Coaching
                    </h4>
                    <p className="fs-6 text-black-50">
                      Frontier Park Aintree Victoria Australia 3336
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <p className="text-black-50">
                  <img className="ms-1" src="assets/images/court.png" />
                  10 Hardcourts
                </p>
                <p className="ms-auto  text-black-50">
                  <img className="ms-1" src="assets/images/light.png" />
                  All Courts have lighting
                </p>
              </div>

              <div className="d-flex align-items-center mt-2 pb-3">
                <Button className="rounded-pill fs-6 lh-sm text-white px-3 fw-bold member border-0">
                  129 | Members
                </Button>
                <Button className="rounded-pill fs-6 lh-sm text-white px-3 fw-bold aintree border-0 ms-2">
                  22 Teams
                </Button>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button fw-bold"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" lg="4">
          <div className="rounded-xl position-relative  border">
            <img className="w-100" src="assets/images/product.png" />
            <Button
              className="border-0  rounded text-white position-absolute featured"
              variant="primary"
            >
              Featured
            </Button>
            <div className="p-3">
              <div className="d-flex w-100 mt-3">
                <div>
                  <div className="">
                    <h4 className="text-capitalize m-0 fw-bold">
                      In2tennis Coaching
                    </h4>
                    <p className="fs-6 text-black-50">
                      Frontier Park Aintree Victoria Australia 3336
                    </p>
                  </div>
                </div>
              </div>

              <div className="d-flex">
                <p className="text-black-50">
                  <img className="ms-1" src="assets/images/court.png" />
                  10 Hardcourts
                </p>
                <p className="ms-auto  text-black-50">
                  <img className="ms-1" src="assets/images/light.png" />
                  All Courts have lighting
                </p>
              </div>

              <div className="d-flex align-items-center mt-2 pb-3">
                <Button className="rounded-pill fs-6 lh-sm text-white px-3 fw-bold member border-0">
                  129 | Members
                </Button>
                <Button className="rounded-pill fs-6 lh-sm text-white px-3 fw-bold aintree border-0 ms-2">
                  22 Teams
                </Button>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button fw-bold"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
