import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Button } from "react-bootstrap";

const BracketSec = () => {
  return (
    <div
      className="py-5"
      style={{
        background: "#032355",
      }}
    >
      <Container className="py-lg-5">
        <Row className="align-items-center">
          <Col lg={6}>
            <Image
              src="assets/images/brackets.png"
              className="mb-5 mb-lg-0 img-fluid"
            />
          </Col>
          <Col lg={6}>
            <h1 className="text-white fw-700 display-4">
              Create tournament brackets fast
            </h1>
            <ul className="text-white font-xs fw-bold lh-4">
              <li>- Round robin</li>
              <li>- Elimination</li>
              <li>- Leaderboard</li>
              <li>- Casual match</li>
            </ul>
            <h3 className="text-white fw-700 pt-3 pe-5 lh-base">
              Post match results to your news feed and to your groups news feed.
              View match stats.
            </h3>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default BracketSec;
