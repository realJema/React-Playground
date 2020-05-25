import React from "react";
import axios from "axios";
import "./App.css";
import Post from "./Components/layout/post";

class Finder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetch: [],
      works: false,
    };
  }

  // get data before component mounts
  componentDidMount() {
    var url = "http://127.0.0.1:5000//playground/api/finder/data";
    axios.get(url).then((res) => {
      this.setState({
        fetch: res.data,
        works: true,
      });
      // console.log(res.data);
    });
  }

  // conditional rendering in case the db is inaccessible 
  renderPosts() {
    if (this.state.works) {
      return this.state.fetch.map((card, index) => (
        <Post data={card} key={index}/>
      ));
    } else {
      return <h1>Unable to connect to database</h1>;
    }
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
              {this.renderPosts()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Finder;
