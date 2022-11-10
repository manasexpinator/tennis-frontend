import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

const JoinSec = () => {
  return (
    <div
      className="py-5 joinOuter position-relative"
      style={{
        backgroundImage: "url(assets/images/joinBG.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container>
        <Row
          className="position-relative align-items-center"
          style={{ zIndex: "1", height: "100vh" }}
        >
          <Col lg={7}>
            <h1 className="fw-700 display-4 " style={{ color: "#DAFE2A" }}>
              Join Tennis Mastery and meet new tennis players near you!
            </h1>
            <div className="d-flex align-items-center mt-4">
              <Button className="greenBtn  mt-3 mb-3 d-block">
                Download App
              </Button>
              <Button className="greenBtn ms-5 mt-3 mb-3 d-block">
                Register Now
              </Button>
            </div>
          </Col>
          <Col lg={5}></Col>
        </Row>
      </Container>
      ;
    </div>
  );
};

export default JoinSec;
