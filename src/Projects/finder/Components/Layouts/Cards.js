import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Col
} from "reactstrap";

// index page sections

class Cards extends React.Component {
  render() {
    return (
      <Col lg={this.props.data.size}>
        <Card
          className="card-lift--hover shadow border-0"
          style={{
            margin: "10px 0",
            height: "100%",
            backgroundImage: `url(${require("assets/img/theme/" +
              this.props.data.img)})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
          }}
        >
          <CardBody className="py-5">
            <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
              <i className="ni ni-planet" />
            </div>
            <h6 className="text-warning text-uppercase">Prepare Launch</h6>
            <p className="description mt-3">
              Argon is a great free UI package based
            </p>
            <div></div>
            <Button
              className="mt-4 btn-sm"
              color="success"
              href="#pablo"
              onClick={(e) => e.preventDefault()}
            >
              Learn more
            </Button>
          </CardBody>
        </Card>
      </Col>
    );
  }
}

export default Cards;
