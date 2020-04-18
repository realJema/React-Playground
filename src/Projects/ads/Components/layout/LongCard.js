import React from "react";

// {/* Hompage which contains the link to all the projects I am working on */}
class LongCard extends React.Component {
    render () {

        return (
            <div className="card bg-dark text-white col-md-6 middle-spacing">
                <div className="card-img-overlay">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <p className="card-text">Last updated 3 mins ago</p>
                </div>
            </div>
        );
    }
}
export default LongCard;