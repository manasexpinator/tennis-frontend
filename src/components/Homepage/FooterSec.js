import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Button } from "react-bootstrap";

const FooterSec = () => {
  return (
    <div
      className="py-5"
      style={{
        background: "#032355",
      }}
    >
      <Container className="py-lg-5">
        <Row className="align-items-center">
          <Col lg={4}>
            <ul
              className="text-white font-xs fw-bold lh-4 mx-auto"
              style={{ width: "max-content" }}
            >
              <li>
                <a href="#" className="text-white">
                  Tennis Players
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Tennis Clubs
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Tennis Coaches
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul
              className="text-white font-xs fw-bold lh-4 mx-auto"
              style={{ width: "max-content" }}
            >
              <li>
                <a href="#" className="text-white">
                  Tournaments
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Team Manager
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  In App Purchases
                </a>
              </li>
            </ul>
          </Col>
          <Col lg={4}>
            <ul
              className="text-white font-xs fw-bold lh-4 mx-auto"
              style={{ width: "max-content" }}
            >
              <li>
                <a href="#" className="text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul className="d-flex align-items-center pt-5 justify-content-center">
              <li style={{ borderRight: "1px solid #fff" }}>
                <a href="#" className="text-white px-4">
                  <i className="feather-facebook font-sm text-grey-500"></i>
                </a>
              </li>
              <li style={{ borderRight: "1px solid #fff" }}>
                <a href="#" className="text-white px-4">
                  <i className="feather-youtube font-sm text-grey-500"></i>
                </a>
              </li>
              <li>
                <a href="#" className="text-white px-4">
                  <i className="feather-instagram font-sm text-grey-500"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="py-5">
          <Col>
            <Image
              src="assets/images/logo.svg"
              className="mx-auto d-block img-fluid"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterSec;
