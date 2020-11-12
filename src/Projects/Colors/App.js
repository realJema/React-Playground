import React from 'react';
import './App.css';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Colors extends React.Component {
	render() {
		return (
			<Container className="colors-container">
				<Row className="rcontainer">
					<Col className="hcenter">
						<h1 className="colors-title">Explore Colors</h1>
						<p className="colors-description">
							The meaning of colors can vary depending on culture and circumstances. Each color has many
							aspects to it but you can easily learn the language of color by understanding a few simple
							concepts.
						</p>
						<p>
							Color is a form of non verbal communication, it is not a static energy and its meaning can
							change from one day to the next with any individual, it all depends on what energy they are
							expressing at that point in time.
						</p>
						<Row className="colors-download">
							<Button>GET APP</Button>
						</Row>
					</Col>
					<Col className="hcenter">
						<div className="smartphone">
							<div className="content">
								<Carousel>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src={require('./Components/images/red.PNG')}
											alt="First slide"
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src={require('./Components/images/green.PNG')}
											alt="Third slide"
										/>

									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src={require('./Components/images/blue.PNG')}
											alt="Third slide"
										/>

									</Carousel.Item>
								</Carousel>
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default Colors;
