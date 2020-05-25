import React from "react";
import "./App.css";
import Post from './Components/layout/post';

let card_info = {
    "date": {
      "day": "27",
      "month": "Mar",
    },
    "img": "img.JPG",
    "category": "Photos",
    "title": "City Lights in New York",
    "sub_title": "The City that never sleeps.",
    "description": "New York, the largest city in the U.S., is an architectural marvel with plenty of historic monuments, magnificent buildings and countless dazzling skyscrapers."
  
  }
// {/* Hompage which contains the link to all the projects I am working on */}
class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="main_finder">
        <div className="col-md-12 container">
          <div className="d-flex justify-content-center">
            <div className="searchbar">
              <input
                className="search_input"
                type="text"
                name=""
                placeholder="Search..."
              />
              <a href="www.native237.com" className="search_icon">
                <i className="fas fa-search"></i>
              </a>
            </div>
          </div>
          <br />
          <br />
          <div className="col-md-12 row justify-content-center">
            <div id="main_container" className="col-md-12 row">
                <Post data={card_info} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Finder;
