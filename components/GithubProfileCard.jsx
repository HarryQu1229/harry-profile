import React from "react";

import { Card, Col, Row, Container } from "reactstrap";

import SocialLinks from "../components/SocialLinks";

const GithubProfileCard = ({ prof }) => {
  return (
    <Card className="section-lg bg-gradient-primary shadow-lg border-0">
      <Container className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2" lg="4">
              <img
                src={
                  "https://raw.githubusercontent.com/HarryQu1229/image-host/55ef6a6eac4e164ee3b69e6ca75798ddae4a7bf0/notes-img/harry_qu_photo.jpg"
                }
                alt=""
                className="img-center img-fluid shadow shadow-lg--hover mb-4"
              />
            </Col>
            <Col lg="8" className="order-lg-1">
              <h2 className="text-yellow">REACH OUT TO ME!</h2>
              <p className="lead text-white mt-3">
                Contact me via Emain or LinkedIn for anything! Come and say Hi!
              </p>
              <p className="text-white mt-3">{prof.bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-black">
                <i className="ni ni-pin-3 text-black mr-2" />
                {prof.location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
