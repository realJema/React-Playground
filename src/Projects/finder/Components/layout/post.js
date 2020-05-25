import React from "react";

// {/* Hompage which contains the link to all the projects I am working on */}
class Post extends React.Component {
  render() {
    return (
        <div key={this.props.data._id} className="col-md-3 column">
          <div className="post-module">
            <div className="thumbnail">
              <div className="date">
                <div className="day"> {this.props.data.date["day"]} </div>
                <div className="month">Mar</div>
              </div>
              <img src={require('../images/' + this.props.data.img)} alt="photos"/>
            </div>
            <div className="post-content">
              <div className="category">{this.props.data.category}</div>
              <h1 className="title">{this.props.data.title} </h1>
              <h2 className="sub_title">{this.props.data.sub_title}</h2>
              <p className="description"> {this.props.data.description}</p>
              <div className="post-meta">
                <span className="timestamp">
                  <i className="fa fa-clock-">o</i>6 mins ago
                </span>
                <span className="comments">
                  <i className="fa fa-comments"></i>
                  <a href="www.native237.com">39 comments</a>
                </span>
              </div>
            </div>
          </div>
        </div>
    );
  }
}
export default Post;
