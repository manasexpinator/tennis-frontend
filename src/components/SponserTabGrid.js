import React from "react";
import { Col, Row } from "react-bootstrap";
import { Button } from "react-bootstrap";

const SponserTabGrid = () => {
  return (
    <div>
      <Row className="mt-4 g-3">
        <Col xs="12" lg="3">
          <div className="rounded position-relative shadow-sm">
            <img className="w-100" src="assets/images/product.png" />
            <Button
              className="border-0  rounded text-white position-absolute featured"
              variant="primary"
            >
              Featured
            </Button>
            <div className="p-2">
              <div className="d-flex w-100 mt-3">
                <div>
                  <div className="">
                    <h4 className="text-capitalize m-0">montana hotel</h4>
                  </div>
                  <p className="text-grey-500 fw-semibold position-relative loc-text m-0 fs-6 lh-sm">
                    323 Galdene Ave Park, Florida City
                  </p>
                  <img src="assets/images/review.png" />
                </div>
                <div className="ms-auto">
                  <img className="sml-wish" src="assets/images/wishlist.png" />
                </div>
              </div>

              <div className="square d-flex my-3">
                <div className="d-flex align-items-center">
                  <i className="feather-filter font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">200 sq</p>
                </div>

                <div className="d-flex align-items-center ms-3">
                  <i className="feather-wifi font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">WiFi</p>
                </div>

                <div className="d-flex align-items-center ms-3">
                  <i className="feather-credit-card font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">Card</p>
                </div>
              </div>

              <div className="d-flex align-items-center mt-2">
                <p className="price-cont m-0">
                  <span className="fw-bold ms-2">$</span> <b>320</b>/ mo
                </p>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" lg="3">
          <div className="rounded position-relative shadow-sm">
            <img className="w-100" src="assets/images/product.png" />
            <Button
              className="border-0  rounded text-white position-absolute featured"
              variant="primary"
            >
              Featured
            </Button>
            <div className="p-2">
              <div className="d-flex w-100 mt-3">
                <div>
                  <div className="">
                    <h4 className="text-capitalize m-0">montana hotel</h4>
                  </div>
                  <p className="text-grey-500 fw-semibold position-relative loc-text m-0 fs-6 lh-sm">
                    323 Galdene Ave Park, Florida City
                  </p>
                  <img src="assets/images/review.png" />
                </div>
                <div className="ms-auto">
                  <img className="sml-wish" src="assets/images/wishlist.png" />
                </div>
              </div>

              <div className="square d-flex my-3">
                <div className="d-flex align-items-center">
                  <i className="feather-filter font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">200 sq</p>
                </div>

                <div className="d-flex align-items-center ms-3">
                  <i className="feather-wifi font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">WiFi</p>
                </div>

                <div className="d-flex align-items-center ms-3">
                  <i className="feather-credit-card font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">Card</p>
                </div>
              </div>

              <div className="d-flex align-items-center mt-2">
                <p className="price-cont m-0">
                  <span className="fw-bold ms-2">$</span> <b>320</b>/ mo
                </p>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" lg="3">
          <div className="rounded position-relative shadow-sm">
            <img className="w-100" src="assets/images/product.png" />
            <Button
              className="border-0  rounded text-white position-absolute featured"
              variant="primary"
            >
              Featured
            </Button>
            <div className="p-2">
              <div className="d-flex w-100 mt-3">
                <div>
                  <div className="">
                    <h4 className="text-capitalize m-0">montana hotel</h4>
                  </div>
                  <p className="text-grey-500 fw-semibold position-relative loc-text m-0 fs-6 lh-sm">
                    323 Galdene Ave Park, Florida City
                  </p>
                  <img src="assets/images/review.png" />
                </div>
                <div className="ms-auto">
                  <img className="sml-wish" src="assets/images/wishlist.png" />
                </div>
              </div>

              <div className="square d-flex my-3">
                <div className="d-flex align-items-center">
                  <i className="feather-filter font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">200 sq</p>
                </div>

                <div className="d-flex align-items-center ms-3">
                  <i className="feather-wifi font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">WiFi</p>
                </div>

                <div className="d-flex align-items-center ms-3">
                  <i className="feather-credit-card font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">Card</p>
                </div>
              </div>

              <div className="d-flex align-items-center mt-2">
                <p className="price-cont m-0">
                  <span className="fw-bold ms-2">$</span> <b>320</b>/ mo
                </p>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button"
                  variant="primary"
                >
                  <i className="feather-chevron-right font-xss text-white"></i>
                </Button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" lg="3">
          <div className="rounded position-relative shadow-sm">
            <img className="w-100" src="assets/images/product.png" />
            <Button
              className="border-0  rounded text-white position-absolute featured"
              variant="primary"
            >
              Featured
            </Button>
            <div className="p-2">
              <div className="d-flex w-100 mt-3">
                <div>
                  <div className="">
                    <h4 className="text-capitalize m-0">montana hotel</h4>
                  </div>
                  <p className="text-grey-500 fw-semibold position-relative loc-text m-0 fs-6 lh-sm">
                    323 Galdene Ave Park, Florida City
                  </p>
                  <img src="assets/images/review.png" />
                </div>
                <div className="ms-auto">
                  <img className="sml-wish" src="assets/images/wishlist.png" />
                </div>
              </div>

              <div className="square d-flex my-3">
                <div className="d-flex align-items-center">
                  <i className="feather-filter font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">200 sq</p>
                </div>

                <div className="d-flex align-items-center ms-3">
                  <i className="feather-wifi font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">WiFi</p>
                </div>

                <div className="d-flex align-items-center ms-3">
                  <i className="feather-credit-card font-xss text-grey-500 bg-grey rounded-circle p-2 me-1"></i>
                  <p className="m-0 fw-bold fs-6 text-grey-500">Card</p>
                </div>
              </div>

              <div className="d-flex align-items-center mt-2">
                <p className="price-cont m-0">
                  <span className="fw-bold ms-2">$</span> <b>320</b>/ mo
                </p>
                <Button
                  className="border-0 align-items-center ms-auto rounded-circle text-white ryt-button"
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
};

export default SponserTabGrid;
