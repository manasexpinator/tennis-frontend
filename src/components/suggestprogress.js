import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Button, Image } from "react-bootstrap";
import Progreesbar from "../components/progreesbar";

const Suggestprogress = () => {
  return (
    <div>
      <div className="bottm-part">
        <div className="upr-part d-flex align-items-center mb-2">
          <div>
            <h5 className="mb-0 text-black font-bold fs-4 fw-bold">
              Suggested Groups
            </h5>
          </div>
          <div className="ms-auto">
            <Link className="fs-5 fw-bold text-primary text-capitalize" to="#">
              see all
            </Link>
          </div>
        </div>
        <Container className="px-0">
          <Row>
            <Col xs="12" lg="4" className="">
              <div className="center-text-part shadow-xss rounded-xxxl">
                <Image
                  className="w-100 up-img"
                  src="assets/images/product.png"
                />
                <div className="px-2 py-2">
                  <p className="text-black-50 mb-0">5 lesson</p>
                  <h4 className="fw-bold text-black">Sports Player</h4>
                  <div className="d-flex align-items-center justify-content-left mb-2">
                    <Image src="assets/images/user.png" />

                    <p className="text-black mb-0 ps-1">John</p>
                  </div>

                  <Progreesbar />
                  <p className="text-black-50 mb-0 lh-sm fs-6 mt-2">
                    60% complete
                    <br />
                    last activity
                  </p>
                </div>
              </div>
            </Col>

            <Col xs="12" lg="4" className="">
              <div className="center-text-part shadow-xss rounded-xxxl">
                <Image
                  className="w-100 up-img"
                  src="assets/images/product.png"
                />
                <div className="px-2 py-2">
                  <p className="text-black-50 mb-0">5 lesson</p>
                  <h4 className="fw-bold text-black">Sports Player</h4>
                  <div className="d-flex align-items-center justify-content-left mb-2">
                    <Image src="assets/images/user.png" />

                    <p className="text-black mb-0 ps-1">John</p>
                  </div>

                  <Progreesbar />
                  <p className="text-black-50 mb-0 lh-sm fs-6 mt-2">
                    60% complete
                    <br />
                    last activity
                  </p>
                </div>
              </div>
            </Col>

            <Col xs="12" lg="4" className="">
              <div className="center-text-part shadow-xss rounded-xxxl">
                <Image
                  className="w-100 up-img"
                  src="assets/images/product.png"
                />
                <div className="px-2 py-2">
                  <p className="text-black-50 mb-0">5 lesson</p>
                  <h4 className="fw-bold text-black">Sports Player</h4>
                  <div className="d-flex align-items-center justify-content-left mb-2">
                    <Image src="assets/images/user.png" />

                    <p className="text-black mb-0 ps-1">John</p>
                  </div>

                  <Progreesbar />
                  <p className="text-black-50 mb-0 lh-sm fs-6 mt-2">
                    60% complete
                    <br />
                    last activity
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Suggestprogress;
