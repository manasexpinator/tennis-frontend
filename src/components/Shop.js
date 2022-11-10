import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const Shop = () => {
  return (
    <div>
      <Container fluid className="px-0 mt-4">
        <div className="upr-part d-flex align-items-center mb-2">
          <div>
            <h5 className="mb-0 text-black font-bold fs-4 fw-bold">Shop</h5>
          </div>
          <div className="ms-auto">
            <Link className="fs-5 fw-bold text-primary text-capitalize" to="#">
              see all
            </Link>
          </div>
        </div>
        <Row>
          <Col xs="12" lg="4">
            <div className="shadow-xss rounded-xxxl center-text-part">
              <img className="w-100 up-img" src="assets/images/product.png" />
              <h6 className="fw-bold text-black text-center text-capitalization mt-4 fs-4  text-capitalize">
                classic swim truck
              </h6>
              <p className="text-center text-black text-warning pb-2">
                $ 150.00
              </p>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div className="shadow-xss rounded-xxxl center-text-part">
              <div className="position-relative">
                <img className="w-100 up-img" src="assets/images/product.png" />
                <button
                  type="button"
                  class="px-1 rounded sale text-uppercase border-0 position-absolute text-white fs-6 fw-bold"
                >
                  sale
                </button>
              </div>
              <h6 className="fw-bold text-black text-center text-capitalization mt-4 fs-4  text-capitalize">
                classic swim truck
              </h6>
              <p className="text-center text-black text-warning pb-2">
                $ 150.00
              </p>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div className="shadow-xss rounded-xxxl center-text-part">
              <img className="w-100 up-img" src="assets/images/product.png" />
              <h6 className="fw-bold text-black text-center text-capitalization mt-4 fs-4  text-capitalize">
                classic swim truck
              </h6>
              <p className="text-center text-black text-warning pb-2">
                $ 150.00
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Shop;
