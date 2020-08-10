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

// reactstrap components
// reactstrap components
import {
  Card,
  CardBody,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import DemoNavbar from "components/Navbars/Navbar.js";
import SimpleFooter from "components/Footers/SimpleFooter.js";

class Description extends React.Component {
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }
  render() {
    return (
      <>
        <DemoNavbar />
        <main className="profile-page" ref="main">
          <section className="section-profile-cover section-shaped my-0">
            {/* Circles background */}
            <div className="shape shape-style-1 shape-default alpha-4">
              <span />
              <span />
              <span />
              <span />
            </div>
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
          <section className="section section-lg pt-lg-0 section-contact-us">
            <Container>
              <Row className="justify-content-center mt--300">
                <Col lg="12">
                  <Card className="bg-gradient-secondary shadow">
                    <CardBody className="p-lg-5">
                      <h1> Introduction </h1>
                      <p>
                        Le terme télé présence fait référence à plusieurs
                        techniques qui permettent à une personne d'avoir
                        l'impression d'être présent, de donner l'impression
                        d'être présent, ou d'avoir un effet à un endroit autre
                        que leur emplacement réel. La télé présence demande que
                        les sens de l'utilisateur, ou des utilisateurs, soient
                        soumis à des stimuli qui donnent l'impression d'être sur
                        un site distant. En plus de cela, l'utilisateur peut
                        avoir la possibilité d'agir sur ce site distant. Dans ce
                        cas, la position de l'utilisateur ainsi que ses
                        mouvements, actions, ou paroles peuvent être perçues,
                        transmises et dupliquées vers la destination voulue pour
                        mettre cet effet en action. De ce fait, l'information
                        peut voyager à double sens entre l'utilisateur et
                        l'emplacement distant. Pour appliquer ce principe,
                        plusieurs techniques doivent être mises en œuvre.
                        <h1> La vision</h1>
                      </p>
                      <p>
                        Au minimum, un système de télé présence comprend
                        généralement un retour visuel. Au mieux, l'ensemble du
                        champ de vision de l'utilisateur est rempli avec une vue
                        du site distant. Le centre de la vue correspond au
                        mouvement et à l'orientation de la tête de
                        l'utilisateur. En ce sens, il diffère de la télévision
                        ou du cinéma, où le centre de la vue est hors de
                        contrôle de celui qui regarde. Pour atteindre cet
                        objectif, l'utilisateur possède soit avec un très grand
                        écran, ou petit affichage monté directement devant ses
                        yeux. Ce dernier présente la particularité de pouvoir
                        simuler une vue en trois dimensions. Les mouvements de
                        la tête de l'utilisateur peuvent être interprétés par le
                        système et la caméra peut imiter ces mouvements de façon
                        précise et en temps réel. Ceci est important pour éviter
                        tout déclenchement du mal de mer.
                        <h1> Le son</h1>
                      </p>
                      <p>
                        Le son est généralement plus facile à mettre en œuvre.
                        Il est aussi plus facile d'atteindre une qualité de son
                        importante, même avec un téléphone datant de plus de 100
                        ans, et avec un matériel de sonorisation de qualité
                        facilement disponibles aux consommateurs. Le son en
                        stéréo est plus convaincant que le son monophonique.
                        Enfin, le son « surround » est encore mieux.
                        <h1> Le toucher</h1>
                      </p>
                      <p>
                        La capacité de manipuler un objet à distance et
                        d'interagir avec l'environnement est un aspect important
                        d'un système de télé présence. Il peut être mis en œuvre
                        de plusieurs façons différentes en fonction des besoins
                        de l'utilisateur. Habituellement, le mouvement des mains
                        et des doigts de l'utilisateur est détecté grâce à des
                        gants câblés possédant des capteurs d'inertie ou des
                        capteurs de la position dans l'espace. Des robots situés
                        sur le site distant copient les mouvements de
                        l'utilisateur. Cette capacité est également connue sous
                        le nom de télé robotique. Plus le robot recrée la forme
                        de la main humaine, plus le sentiment de télé présence
                        est important. La complexité des systèmes robotisés
                        varie considérablement, allant du simple axe avec une
                        pince jusqu'à la main pleinement robotisée. La Télé
                        présence comme dispositif de réunion à distance Dans les
                        systèmes de réunion à distance, le terme télé présence
                        est réservé aux dispositifs permettant la vision et
                        l'écoute de l'ensemble des participants. Les
                        participants distants sont en général visualisés à
                        l'échelle 1. Contrairement aux systèmes classiques de
                        visioconférence, où une caméra zoom ou "panote" pour
                        cadrer le locuteur, dans un dispositif de télé présence
                        toute la "scène" est filmée simultanément par plusieurs
                        caméras. Il est donc possible de voir tous les
                        participants et d'observer leurs réactions, leurs
                        échanges de regards. Le confort et donc la qualité des
                        réunions sont nettement améliorés, il est possible
                        d'oublier la technologie et d'avoir le sentiment de
                        participer à une réunion ordinaire. Le
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Description;
