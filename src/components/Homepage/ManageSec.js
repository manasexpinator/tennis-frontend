import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Button } from "react-bootstrap";

const ManageSec = () => {
  return (
    <div
      className="py-5"
      style={{
        background: "#fff",
      }}
    >
      <Container className="py-lg-5">
        <Row className="align-items-center">
          <Col lg={7} className="order-2 order-lg-1">
            <h1 className="text-dark fw-700 display-4">
              Manage tennis teams easily and save time!
            </h1>

            <h3 className="text-dark fw-700 pt-3 pe-5 lh-base">
              Add teams, players and create match schedules. Manage availability
              and rosters. Send automatic reminders to parents and players. Plus
              track match results and stats
            </h3>
          </Col>
          <Col lg={5} className="order-1 order-lg-2">
            <Image
              src="assets/images/manage.png"
              className="mb-5 mb-lg-0 img-fluid ms-auto d-block"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ManageSec;
