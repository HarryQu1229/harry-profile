import React from "react";
import { Card, CardBody, Button } from "reactstrap";

import { Fade } from "react-reveal";

const FeedbackCard = ({ data }) => {
  return (
    <Fade bottom duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-black">{data.name}</h5>
              <p className="description mt-3">{data.achievement}</p>
              {data.link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={data.link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Twitter"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">Go!</span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default FeedbackCard;
