import React from "react";
import './App.css';

import Carousel from 'react-bootstrap/Carousel';
import { Navbar, Container } from 'react-bootstrap';
// importing the cards 
import SmallCard from './Components/layout/SmallCard';
import LongCard from './Components/layout/LongCard';
import SquareCard from "./Components/layout/SquareCard";
import SmallCardBefore from "./Components/layout/SmallCardBefore";
import LongestCard from "./Components/layout/LongestCard";

// {/* Hompage which contains the link to all the projects I am working on */}
class Ads extends React.Component {
    render () {

        return (
            <div className="">
                <Carousel className="col-md-12 carousel">
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require('./Components/images/card.PNG')}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={require('./Components/images/card.PNG')}
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
                        src={require('./Components/images/card.PNG')}
                        alt="Third slide"
                        />


                        <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                 </Carousel>
               
                <div className="container-fluid col-md-8">
                        <div className="container-fluid row">
                            <SmallCard />
                            <LongCard />
                            <SmallCard />
                        </div>
                        <div className="container-fluid row">
                            <SquareCard />
                            <div className="col-6 no-padding">
                                <div className="row">
                                    <LongCard />
                                    <LongCard />
                                </div>
                                <div className="row">
                                    <LongestCard />
                                </div>
                            </div>
                            
                        </div>
                        <div className="container-fluid row">
                            <LongestCard />
                        </div>
                        <div className="container-fluid row">
                            <SmallCardBefore />
                            <SmallCardBefore />
                            <SmallCardBefore />
                            <SmallCard />
                        </div>
                </div>
                <div className="fixed-bottom">  
            <Navbar color="dark" dark>
                <Container>
                    <h6>Ads</h6>
                </Container>
            </Navbar>
        </div>
            </div>
        );
    }
}
export default Ads;