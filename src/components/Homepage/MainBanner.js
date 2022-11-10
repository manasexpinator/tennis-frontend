import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Image, Button } from "react-bootstrap";

const MainBanner = () => {
  return (
    <div
      className="py-5"
      style={{
        backgroundImage: "url(assets/images/mainBG.png)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <Container className="py-lg-5">
        <Row>
          <Col lg={7} className="order-2 order-lg-1">
            <h1 className="text-white fw-700 display-4">
              Social media for tennis clubs, players and coaches
            </h1>
            <h3 className="text-white fw-700 pt-3 pe-5 lh-base">
              Connect with tennis players near you. Create social groups,
              Tournaments, record tennis match scores and improve your game with
              tennis courses. Shop new tennis products in our store or second
              hand items in our marketplace.
            </h3>
            <Button className="mx-auto greenBtn d-block mt-5">
              Download App
            </Button>
          </Col>
          <Col lg={5} className="order-1 order-lg-2">
            <Image
              src="assets/images/mobileMock.png"
              className="mx-auto d-block mb-5 mb-lg-0"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainBanner;
