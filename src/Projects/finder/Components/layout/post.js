import React from "react";

// {/* Hompage which contains the link to all the projects I am working on */}
class Post extends React.Component {
  render() {
    return (
        <div class="col-md-3 column">
          <div class="post-module">
            <div class="thumbnail">
              <div class="date">
                <div class="day"> {this.props.data.date["day"]} </div>
                <div class="month">Mar</div>
              </div>
              <img src={require('../images/' + this.props.data.img)} alt="photos"/>
            </div>
            <div class="post-content">
              <div class="category">{this.props.data.category}</div>
              <h1 class="title">{this.props.data.title} </h1>
              <h2 class="sub_title">{this.props.data.sub_title}</h2>
              <p class="description"> {this.props.data.description}</p>
              <div class="post-meta">
                <span class="timestamp">
                  <i class="fa fa-clock-">o</i>6 mins ago
                </span>
                <span class="comments">
                  <i class="fa fa-comments"></i>
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
