import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import AchievementsCard from "../components/AchievementsCard";

const Feedbacks = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="fa fa-star text-primary" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-primary">Achievements</h4>
          </div>
        </div>
        <Row className="row-grid align-items-center">
          {feedbacks.map((data, i) => {
            return (
              <Col key={i} lg={4}>
                <AchievementsCard data={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Feedbacks;
