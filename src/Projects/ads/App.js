import React from "react";
import './App.css';

// importing the cards 
import SmallCard from './Components/layout/SmallCard';
import LongCard from './Components/layout/LongCard';
import SquareCard from "./Components/layout/SquareCard";
import LongestCard from "./Components/layout/LongestCard";

// {/* Hompage which contains the link to all the projects I am working on */}
class Ads extends React.Component {
    render () {

        return (
            <div className="container-fluid col-md-8">
                <div className="container-fluid row">
                     <SmallCard />
                     <LongCard />
                     <SmallCard />
                </div>
                <div className="container-fluid row">
                    <SquareCard />
                    <div className="col-md-6 no-padding">
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
                     <SmallCard />
                     <SmallCard />
                     <SmallCard />
                     <SmallCard />
                </div>
            </div>
        );
    }
}
export default Ads;