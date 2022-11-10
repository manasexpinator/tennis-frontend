import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default function CoachTabGrid() {
  return (
    <div>
      <Row className="mt-4 g-3">
        <Col xs="12" lg="3">
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
                  </div>
                  <p className="text-black fw-semibold position-relative loc-text m-0 fs-6 lh-sm text-black my-3">
                    Head Coach: Luke Hodgkin
                  </p>
                </div>
              </div>

              <Button className="rounded-pill fs-6 lh-sm text-white px-3 member border-0 aintree">
                Aintree Tennis Club
              </Button>

              <div className="d-flex align-items-center mt-2 pb-3">
                <Button className="rounded-pill fs-6 lh-sm text-white px-3 fw-bold member border-0">
                  129 | Members
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
