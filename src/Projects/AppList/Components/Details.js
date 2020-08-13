import React from "react";
import axios from "axios";

// local db link
const BACKEND_API = "http://localhost:5000/native/api/shoutout/";

class Details extends React.Component {
  state = {
    post: {},
    loading: true,
    erroMessage: "",
    error: false,
  };

  // get details of card
  componentDidMount() {
    axios
      .post(BACKEND_API + "details", {
        postId: localStorage.getItem("postId"),
      })
      .then((res) => {
        this.setState({
          post: res.data[0],
          loading: false,
        });
        console.log(this.state.post.date.day);
      })
      .catch((error) => {
        // Error
        console.log(error);
        this.setState({
          errorMessage: error.message,
          error: true,
          loading: false,
        });
      });
  }

  render() {
    // let selectedCardId = localStorage.getItem("postId");
    // you can get this cardId anywhere in the component as per your requirement
    return (
      <div
        className="details-page"
        style={{
          backgroundImage: 'url("' + this.state.post.img + '")',
        }}
        >
        <div className="details-page-header">
            <h1 className="details-page-title">{this.state.post.title}</h1>
            <p className="details-page-sub">{this.state.post.sub_title}</p>
            <p className="details-page-info">
            #{this.state.post.category} @{this.state.post.author}{" "}
            ${this.state.post.location}
            </p>
        </div>
        {/* <span>{this.state.post.date.month} {this.state.post.date.month}</span> */}
        <p className="details-page-description">
          {this.state.post.description}
        </p>
      </div>
    );
  }
}

export default Details;
