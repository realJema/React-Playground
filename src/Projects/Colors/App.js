import React from 'react';
import './App.css';
import { Carousel, Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Colors extends React.Component {
	render() {
		return (
			<Container>
				<Row className="rcontainer">
					<Col className="hcenter">
						<h1 className="title">Explore Colors</h1>
						<p className="description">
							The meaning of colors can vary depending on culture and circumstances. Each color has many
							aspects to it but you can easily learn the language of color by understanding a few simple
							concepts.
						</p>
						<p>
							Color is a form of non verbal communication, it is not a static energy and its meaning can
							change from one day to the next with any individual, it all depends on what energy they are
							expressing at that point in time.
						</p>
            <Row className="download">
							<Button>
                ANDROID
							</Button> 
              
							<Button>
								IOS
							</Button> 
						</Row>
					</Col>
					<Col className="hcenter">
						<div className="smartphone">
							<div className="content">
								<Carousel>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="https://images.unsplash.com/photo-1599687350404-88b32c067289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
											alt="First slide"
										/>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="https://images.unsplash.com/photo-1599687350404-88b32c067289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3>Second slide label</h3>
											<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
										</Carousel.Caption>
									</Carousel.Item>
									<Carousel.Item>
										<img
											className="d-block w-100"
											src="https://images.unsplash.com/photo-1599687350404-88b32c067289?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
											alt="Third slide"
										/>

										<Carousel.Caption>
											<h3>Third slide label</h3>
											<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
										</Carousel.Caption>
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
