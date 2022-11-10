import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Job = () => {
  return (
    <div>
      <Container fluid className="px-0 mt-4">
        <div className="upr-part d-flex align-items-center mt-4 mb-2">
          <div>
            <h5 className="mb-0 text-black font-bold fs-4 fw-bold">Jobs</h5>
          </div>
          <div className="ms-auto">
            <Link className="fs-5 fw-bold text-primary text-capitalize" to="#">
              see all
            </Link>
          </div>
        </div>
        <Row className="job-part">
          <Col xs="12" lg="4" className="lg:ps-0">
            <div className="">
              <div className="d-flex align-items-center mb-2">
                <h6 className="fw-bold text-black text-left mb-0 fs-5">
                  Python developer
                </h6>
                <p className="text-black ms-auto mb-0 fs-6 text-black-50">
                  (3 days ago)
                </p>
              </div>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Location</b> : London, United Kingdom
              </p>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Employement</b> : part time
              </p>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Salary</b> : 1200
              </p>

              <ButtonGroup aria-label="Basic example" className="mt-4">
                <Button className="px-1  rounded ux-design text-capitalize border-0">
                  ux design
                </Button>
                <Button className="px-1  rounded ms-2 andriod text-capitalize border-0">
                  andriod
                </Button>
                <Button className="px-1 rounded ms-2 developer text-capitalize border-0">
                  developer
                </Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col xs="12" lg="4">
            <div className="">
              <div className="d-flex align-items-center mb-2">
                <h6 className="fw-bold text-black text-left mb-0 fs-5">
                  Python developer
                </h6>
                <p className="text-black ms-auto mb-0 fs-6 text-black-50">
                  (3 days ago)
                </p>
              </div>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Location</b> : London, United Kingdom
              </p>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Employement</b> : part time
              </p>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Salary</b> : 1200
              </p>

              <ButtonGroup aria-label="Basic example" className="mt-4">
                <Button className="px-1  rounded ux-design text-capitalize border-0">
                  ux design
                </Button>
                <Button className="px-1  rounded ms-2 andriod text-capitalize border-0">
                  andriod
                </Button>
                <Button className="px-1 rounded ms-2 developer text-capitalize border-0">
                  developer
                </Button>
              </ButtonGroup>
            </div>
          </Col>
          <Col xs="12" lg="4" className="pe-0">
            <div className="">
              <div className="d-flex align-items-center mb-2">
                <h6 className="fw-bold text-black text-left mb-0 fs-5">
                  Python developer
                </h6>
                <p className="text-black ms-auto mb-0 fs-6 text-black-50">
                  (3 days ago)
                </p>
              </div>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Location</b> : London, United Kingdom
              </p>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Employement</b> : part time
              </p>
              <p className="fs-6 mb-1 text-black-50 lh-sm">
                <b className="text-black">Salary</b> : 1200
              </p>

              <ButtonGroup aria-label="Basic example" className="mt-4">
                <Button className="px-1  rounded ux-design text-capitalize border-0">
                  ux design
                </Button>
                <Button className="px-1  rounded ms-2 andriod text-capitalize border-0">
                  andriod
                </Button>
                <Button className="px-1 rounded ms-2 developer text-capitalize border-0">
                  developer
                </Button>
              </ButtonGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Job;
