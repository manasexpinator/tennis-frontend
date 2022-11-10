import React from "react";
import { Col, Row } from "react-bootstrap";

const ListGrid = () => {
  return (
    <div>
      <Row className="mt-4">
        <Col xs="12" lg="4">
          <div className="border rounded-xxl p-3">
            <img src="assets/images/product.png" className="w-100" />
            <div className="middle-cont">
              <div className="date d-flex mt-4">
                <p className="date-cont lh-2 bg-grey text-center p-3 rounded-xxl">
                  <span className="text-black-50">FEB</span>
                  <br />
                  <b className="fs-1 ">22</b>
                </p>

                <p className="ms-3 lh-4 pt-1">
                  <b>
                    Right here Right now
                    <br /> Comedy
                  </b>
                  <br />
                  <span>
                    {" "}
                    <img className="me-2" src="assets/images/pin.png" />
                    Goa, Mumbai
                  </span>
                </p>
              </div>
              <div className="bott-cont d-flex mt-2">
                <ul className="even-list d-flex">
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                </ul>
                <button
                  type="btn"
                  className="rounded px-3 lh-1 fs-5 border-0 ms-auto text-uppercase text-white fw-bold apply"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" lg="4">
          <div className="border rounded-xxl p-3">
            <img src="assets/images/product.png" className="w-100" />
            <div className="middle-cont">
              <div className="date d-flex mt-4">
                <p className="date-cont lh-2 bg-grey text-center p-3 rounded-xxl">
                  <span className="text-black-50">FEB</span>
                  <br />
                  <b className="fs-1 ">22</b>
                </p>

                <p className="ms-3 lh-4 pt-1">
                  <b>
                    Right here Right now
                    <br /> Comedy
                  </b>
                  <br />
                  <span>
                    {" "}
                    <img className="me-2" src="assets/images/pin.png" />
                    Goa, Mumbai
                  </span>
                </p>
              </div>
              <div className="bott-cont d-flex mt-2">
                <ul className="even-list d-flex">
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                </ul>
                <button
                  type="btn"
                  className="rounded px-3 lh-1 fs-5 border-0 ms-auto text-uppercase text-white fw-bold apply"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </Col>

        <Col xs="12" lg="4">
          <div className="border rounded-xxl p-3">
            <img src="assets/images/product.png" className="w-100" />
            <div className="middle-cont">
              <div className="date d-flex mt-4">
                <p className="date-cont lh-2 bg-grey text-center p-3 rounded-xxl">
                  <span className="text-black-50">FEB</span>
                  <br />
                  <b className="fs-1 ">22</b>
                </p>

                <p className="ms-3 lh-4 pt-1">
                  <b>
                    Right here Right now
                    <br /> Comedy
                  </b>
                  <br />
                  <span>
                    {" "}
                    <img className="me-2" src="assets/images/pin.png" />
                    Goa, Mumbai
                  </span>
                </p>
              </div>
              <div className="bott-cont d-flex mt-2">
                <ul className="even-list d-flex">
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                  <li>
                    <img src="assets/images/onfire.svg" />
                  </li>
                </ul>
                <button
                  type="btn"
                  className="rounded px-3 lh-1 fs-5 border-0 ms-auto text-uppercase text-white fw-bold apply"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      <p className="mt-4 fs-4">
        <b>
          If no events " You dont have any events yet. Click here to create a
          new event"
        </b>
      </p>

      <p className="fs-4">
        <b>
          Button needs to say going or interested > this adds it to their
          events.
          <br /> or if it has a ticket with payment say buy tickets.
        </b>
      </p>
    </div>
  );
};

export default ListGrid;
