import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";

import { Fade } from "react-reveal";

import ExperienceCard from "../components/ExperienceCard";

const Experience = () => {
  return (
    <section className="section section-lg">
      <Container>
        <div className="d-flex p-4">
          <div>
            <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
              <i className="ni ni-briefcase-24 text-primary" />
            </div>
          </div>
          <div className="pl-4">
            <h4 className="display-3 text-primary">Experience</h4>
          </div>
        </div>
        <Row className="row-grid align-items-start">
          {experience.map((data, i) => {
            return <ExperienceCard key={i} data={data} />;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
