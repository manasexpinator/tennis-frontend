import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button, Image } from "react-bootstrap";

const FeatureSec = () => {
  return (
    <div style={{ background: "#EDEDEF" }}>
      <Container className="py-5">
        <Row className="py-5">
          <Col lg={4} className="mb-4">
            <div className="bg-white d-block pb-3">
              <Image
                src="assets/images/player.png"
                className="img-fluid w-100"
              />
              <ul className="featList ps-5 pe-2 pt-5 pb-3 ">
                <li>Connect with players near you</li>
                <li>Create social groups & msg friends</li>
                <li>Watch tennis videos and tips</li>
                <li>Create tournament brackets & ladders</li>
                <li>Improve your game with tennis courses</li>
                <li>Shop our tennis store & marketplace</li>
              </ul>
              <Button className="greenBtn mx-auto mb-3 d-block">
                All Features
              </Button>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div className="bg-white d-block pb-3">
              <Image src="assets/images/club.png" className="img-fluid w-100" />
              <ul className="featList ps-5 pe-2 pt-5 pb-3 ">
                <li>Create tournaments with online entry</li>
                <li>Manage teams, rosters & reminders</li>
                <li>Create a group and communicate</li>
                <li>Sell club merchandise</li>
                <li>Create a listing for your club</li>
                <li>Create fundraisers & sponsors</li>
              </ul>
              <Button className="greenBtn mx-auto mb-3 d-block">
                All Features
              </Button>
            </div>
          </Col>
          <Col lg={4} className="mb-4">
            <div className="bg-white d-block pb-3">
              <Image
                src="assets/images/coaches.png"
                className="img-fluid w-100"
              />
              <ul className="featList ps-5 pe-2 pt-5 pb-3 ">
                <li>Create tournaments with online entry</li>
                <li>Manage teams, rosters & reminders</li>
                <li>Create a group for your business</li>
                <li>List your business and signup form</li>
                <li>Create your own tennis course</li>
                <li>Shop our tennis store & marketplace</li>
              </ul>
              <Button className="greenBtn mx-auto mb-3 d-block">
                All Features
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FeatureSec;
