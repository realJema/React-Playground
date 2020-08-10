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
import React from "react";
import { Link } from "react-router-dom";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/Navbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

import './Telepresence.css';

class Telepresence extends React.Component {
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
              <div className="navbg shape shape-style-1 ">
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
                        Salles de Téléprésence
                        <span>Reservation CAMTEL</span>
                      </h1>
                      <p className="lead text-white">
                        Organiser une séance de travail à distance en direct,
                        par des systèmes de "salles virtuelles", c'est désormais
                        abordable. Notamment grâce à des systèmes de locations.
                      </p>
                      <div className="btn-wrapper">
                        <Button
                          className="btn-icon mb-3 mb-sm-0"
                          color="info"
                          tag={Link}
                          to="/telepresence/reserver"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="fa fa-code" />
                          </span>
                          <span className="btn-inner--text">Reserver</span>
                        </Button>
                        <Button
                          className="btn-white btn-icon mb-3 mb-sm-0 ml-1"
                          color="default"
                          tag={Link}
                          to="/telepresence/details"
                        >
                          <span className="btn-inner--icon mr-1">
                            <i className="ni ni-cloud-download-95" />
                          </span>
                          <span className="btn-inner--text">
                            Plus d'Informations
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
          <section className="section section-lg">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-md-2" md="6">
                  <img
                    alt="..."
                    className="img-fluid floating"
                    src={require("assets/img/telepresence/ecran-2.jpg")}
                  />
                </Col>
                <Col className="order-md-1" md="6">
                  <div className="pr-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-success shadow rounded-circle mb-5">
                      <i className="ni ni-settings-gear-65" />
                    </div>
                    <h3>System</h3>
                    <p className="lead">
                      Le système de téléprésence double Cisco Profile 65 ”est
                      une solution tout-en-un entièrement intégrée. Cela fournit
                      des images vidéo cristallines en Full HD et permet
                      également d'afficher du contenu multimédia. La large gamme
                      d'options de connexion et les composants audio de haute
                      qualité permettent au système d'être intégré à la
                      technologie multimédia existante.
                    </p>
                    <ul className="list-unstyled mt-5">
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-settings-gear-65" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              se connecter à une réunion via son ordinateur
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-html5" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              Connecter un système de visio-conférence externe
                            </h6>
                          </div>
                        </div>
                      </li>
                      <li className="py-2">
                        <div className="d-flex align-items-center">
                          <div>
                            <Badge
                              className="badge-circle mr-3"
                              color="success"
                            >
                              <i className="ni ni-satisfied" />
                            </Badge>
                          </div>
                          <div>
                            <h6 className="mb-0">
                              réserver via une interface unique une ou plusieurs
                              salles
                            </h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/telepresence/salle-5.png")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Expérience
                      </h4>
                      <p className="lead text-italic text-white">
                        Cette expérience de téléprésence immersive est unique et
                        inédite, elle représente une véritable révolution par
                        rapport à la vidéoconférence classique.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>La Visioconférence</h3>
                    <p className="lead">
                      Trouver une salle avec la capacité souhaitée, contenant
                      l’équipement dont vous avez besoin, au bon endroit, au bon
                      moment, et pouvoir la réserver en envoyant simplement une
                      invitation par mail, devient possible grâce aux nouveaux
                      systèmes de réservation de salles.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle mb-5">
                      <i className="ni ni-settings" />
                    </div>
                    <h3>Réunion Panoramique</h3>
                    <p className="lead">
                      Une vraie salle de réunion, grandeur avec un mur vidéo,
                      qui offre une vue panoramique de la salle de réunion à
                      distance. Et permet de voir son interlocuteur en taille
                      réelle, avec lequel on peut échanger sans devoir passer
                      par un micro, ni une webcam, grâce à l'équipement de la
                      salle.
                    </p>
                  </div>
                </Col>
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      alt="..."
                      src={require("assets/img/telepresence/salle-6.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Immersive
                      </h4>
                      <p className="lead text-italic text-white">
                        Il est essentiel que les solutions de téléprésence
                        immersives s'intègrent en toute transparence à votre
                        environnement et vos flux de travail existants.
                      </p>
                    </blockquote>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-0 bg-gradient-warning">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-2 ml-lg-auto" md="6">
                  <div className="position-relative pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/telepresence/ecran-1.png")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="ni ni-building text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">Modern Interface</h4>
                      <p className="text-white">
                        The Arctic Ocean freezes every winter and much of the
                        sea-ice then thaws every summer, and that process will
                        continue whatever.
                      </p>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-satisfied" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">IDÉAL POUR</h5>
                          <p>
                            Salles de réunion nécessitant une solution vidéo
                            tout-en-un.
                          </p>
                          <p>
                            Des petites salles de réunion qui doivent se
                            connecter à plusieurs plates-formes vidéo.
                          </p>
                          <a
                            className="text-success"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-warning rounded-circle text-white">
                            <i className="ni ni-active-40" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-warning">Conférences</h5>
                          <p>
                            Pour communiquer efficacement et vous permettre
                            d'atteindre vos objectifs, toute la partie relevant
                            de l'équipement technique doit être invisible et
                            ultra performante.
                          </p>
                          <a
                            className="text-warning"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
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
          <section className="section section-lg">
            <Container>
              <Row className="justify-content-center text-center mb-lg">
                <Col lg="8">
                  <h2 className="display-3">Localisation</h2>
                  <p className="lead text-muted">Reserver des Maintenant</p>
                </Col>
              </Row>
              <Row>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle rounded-circle-town img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/telepresence/ville-1.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Yaounde</span>
                        <small className="h6 text-muted">
                          Boulevard 20 Mai
                        </small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle rounded-circle-town img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/telepresence/ville-2.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Douala</span>
                        <small className="h6 text-muted">Bepanda</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle rounded-circle-town img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/telepresence/ville-2.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Douala</span>
                        <small className="h6 text-muted">Bepanda</small>
                      </h5>
                    </div>
                  </div>
                </Col>
                <Col className="mb-5 mb-lg-0" lg="3" md="6">
                  <div className="px-4">
                    <img
                      alt="..."
                      className="rounded-circle rounded-circle-town img-center img-fluid shadow shadow-lg--hover"
                      src={require("assets/img/telepresence/ville-2.jpg")}
                      style={{ width: "200px" }}
                    />
                    <div className="pt-4 text-center">
                      <h5 className="title">
                        <span className="d-block mb-1">Douala</span>
                        <small className="h6 text-muted">Bepanda</small>
                      </h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section section-lg pt-0">
          </section>
          <section className="section section-lg bg-gradient-default">
            <Container className="pt-lg no-padding pb-300">
              <Row className="text-center justify-content-center">
                <Col lg="10">
                  <h2 className="display-3 text-white">
                    Salles de téléprésence High Tech
                  </h2>
                  <p className="lead text-white">
                    CAMTEL met à votre disposition une infrastructure de
                    communication collaborative comprenant des équipements de
                    visioconférence pour vos réunions et séminaires
                  </p>
                </Col>
              </Row>
              <Row className="row-grid mt-5">
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-settings text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Équipement </h5>
                  <p className="text-white mt-3">
                    Découvrez ci-dessous toutes les catégories d'équipements
                    audiovisuel proposées par Initia.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Visioconférence</h5>
                  <p className="text-white mt-3">
                    Toutes les solutions pour vos visioconférences et solution
                    en télétravail
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-atom text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Captation vidéo </h5>
                  <p className="text-white mt-3">
                    Archiver, diffuser et capitaliser sur vos présentations, en
                    toute autonomie.
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Visioconférence</h5>
                  <p className="text-white mt-3">
                    Toutes les solutions pour vos visioconférences et solution
                    en télétravail
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Visioconférence</h5>
                  <p className="text-white mt-3">
                    Toutes les solutions pour vos visioconférences et solution
                    en télétravail
                  </p>
                </Col>
                <Col lg="4">
                  <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                    <i className="ni ni-ruler-pencil text-primary" />
                  </div>
                  <h5 className="text-white mt-3">Visioconférence</h5>
                  <p className="text-white mt-3">
                    Toutes les solutions pour vos visioconférences et solution
                    en télétravail
                  </p>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100"></div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Telepresence;
