/*!

=========================================================
* Argon Design System React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

/* TODO:
 * [] Add background images to cards
 * [] create card component
 * [] Link to database Api
 * [] Add Filters 
 * [] Add loading icon 
 * [] create details page 
*/
import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/Navbar.js";
import CardsFooter from "components/Footers/Footer.js";
import Cards from "components/Layouts/Cards.js";

// data for cards 
let data = {
  size: 3,
  img: "img-1-1200x1000.jpg",
}

class Ads extends React.Component {
  state = {};
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main ref="main">
          <div className="position-relative">
            {/* shape Hero */}
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        A beautiful Design System{" "}
                        <span>completed with examples</span>
                      </h1>
                      <p className="lead text-white">
                        The design system comes with four pre-built pages to
                        help you get started faster. You can change the text and
                        images and you're good to go.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/alerts?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Components</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Download React
                          </span>
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Cards data={data} />
                    <Col lg="6">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="6">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based Argon is a
                            great free UI package based Argon is a great free UI
                            package based Argon is a great free UI package based
                            Argon is a great free UI package based Argon is a
                            great free UI package based Argon is a great free UI
                            package based Argon is a great free UI package based
                            Argon is a great free UI package based Argon is a
                            great free UI package based Argon is a great free UI
                            package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="6">
                      <Row className="row-grid">
                        <Col lg="6">
                          <Card
                            className="card-lift--hover shadow border-0"
                            style={{ margin: "10px 0", height: "100%" }}
                          >
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                <i className="ni ni-planet" />
                              </div>
                              <h6 className="text-warning text-uppercase">
                                Prepare Launch
                              </h6>
                              <p className="description mt-3">
                                Argon is a great free UI package based
                              </p>
                              <div></div>
                              <Button
                                className="mt-4 btn-sm"
                                color="warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Learn more
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6">
                          <Card
                            className="card-lift--hover shadow border-0"
                            style={{ margin: "10px 0", height: "100%" }}
                          >
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                <i className="ni ni-planet" />
                              </div>
                              <h6 className="text-warning text-uppercase">
                                Prepare Launch
                              </h6>
                              <p className="description mt-3">
                                Argon is a great free UI package based
                              </p>
                              <div></div>
                              <Button
                                className="mt-4 btn-sm"
                                color="warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Learn more
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                      <Row className="row-grid">
                        <Col lg="6">
                          <Card
                            className="card-lift--hover shadow border-0"
                            style={{ margin: "10px 0", height: "100%" }}
                          >
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                <i className="ni ni-planet" />
                              </div>
                              <h6 className="text-warning text-uppercase">
                                Prepare Launch
                              </h6>
                              <p className="description mt-3">
                                Argon is a great free UI package based
                              </p>
                              <div></div>
                              <Button
                                className="mt-4 btn-sm"
                                color="warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Learn more
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                        <Col lg="6">
                          <Card
                            className="card-lift--hover shadow border-0"
                            style={{ margin: "10px 0", height: "100%" }}
                          >
                            <CardBody className="py-5">
                              <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                                <i className="ni ni-planet" />
                              </div>
                              <h6 className="text-warning text-uppercase">
                                Prepare Launch
                              </h6>
                              <p className="description mt-3">
                                Argon is a great free UI package based
                              </p>
                              <div></div>
                              <Button
                                className="mt-4 btn-sm"
                                color="warning"
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                              >
                                Learn more
                              </Button>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="3">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="9">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                  <Row className="row-grid">
                    <Col lg="3">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="3">
                      <Card
                        className="card-lift--hover shadow border-0"
                        style={{ margin: "10px 0", height: "100%" }}
                      >
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-warning rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-warning text-uppercase">
                            Prepare Launch
                          </h6>
                          <p className="description mt-3">
                            Argon is a great free UI package based
                          </p>
                          <div></div>
                          <Button
                            className="mt-4 btn-sm"
                            color="warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <CardsFooter />
      </>
    );
  }
}

export default Ads;
