import React from "react";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Container } from "react-bootstrap";
import { Button, Image } from "react-bootstrap";

const Suggested = () => {
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
                <Image
                  className="w-25 mx-auto d-block sm-img mb-3 rounded-xl"
                  src="assets/images/user.png"
                />
                <h6 className="text-center fw-bold text-black mb-0">
                  Sports Player
                </h6>
                <div className="d-flex align-center justify-content-center">
                  <Link className="text-black-50" to="">
                    Public
                  </Link>
                  .
                  <Link className="text-black-50" to="">
                    Club
                  </Link>
                </div>

                <div className="d-flex align-items-center mt-3 px-2 pb-2">
                  <div className="lf-prt d-flex">
                    <Image className="w-100" src="assets/images/user.png" />
                    <Image className="w-100" src="assets/images/user.png" />
                    <Image className="w-100" src="assets/images/user.png" />
                  </div>

                  <div className="rf-prt ms-auto">
                    <Link
                      className="border  text-black py-1 px-4 fw-bold"
                      to=""
                    >
                      Join
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="12" lg="4" className="">
              <div className="center-text-part shadow-xss rounded-xxxl">
                <Image
                  className="w-100 up-img"
                  src="assets/images/product.png"
                />
                <Image
                  className="w-25 mx-auto d-block sm-img mb-3 rounded-xl"
                  src="assets/images/user.png"
                />
                <h6 className="text-center fw-bold text-black mb-0">
                  Sports Player
                </h6>
                <div className="d-flex align-center justify-content-center">
                  <Link className="text-black-50" to="">
                    Public
                  </Link>
                  .
                  <Link className="text-black-50" to="">
                    Club
                  </Link>
                </div>

                <div className="d-flex align-items-center mt-3 px-2 pb-2">
                  <div className="lf-prt d-flex">
                    <Image className="w-100" src="assets/images/user.png" />
                    <Image className="w-100" src="assets/images/user.png" />
                    <Image className="w-100" src="assets/images/user.png" />
                  </div>

                  <div className="rf-prt ms-auto">
                    <Link
                      className="border  text-black py-1 px-4 fw-bold"
                      to=""
                    >
                      Join
                    </Link>
                  </div>
                </div>
              </div>
            </Col>

            <Col xs="12" lg="4" className="">
              <div className="center-text-part shadow-xss rounded-xxxl">
                <Image
                  className="w-100 up-img"
                  src="assets/images/product.png"
                />
                <Image
                  className="w-25 mx-auto d-block sm-img mb-3 rounded-xl"
                  src="assets/images/user.png"
                />
                <h6 className="text-center fw-bold text-black mb-0">
                  Sports Player
                </h6>
                <div className="d-flex align-center justify-content-center">
                  <Link className="text-black-50" to="">
                    Public
                  </Link>
                  .
                  <Link className="text-black-50" to="">
                    Club
                  </Link>
                </div>

                <div className="d-flex align-items-center mt-3 px-2 pb-2">
                  <div className="lf-prt d-flex">
                    <Image className="w-100" src="assets/images/user.png" />
                    <Image className="w-100" src="assets/images/user.png" />
                    <Image className="w-100" src="assets/images/user.png" />
                  </div>

                  <div className="rf-prt ms-auto">
                    <Link
                      className="border  text-black py-1 px-4 fw-bold"
                      to=""
                    >
                      Join
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Suggested;
