import React from "react";
import axios from "axios";
import nl2br from "react-newline-to-break";
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
        console.log("this.state.post.showcase");
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
      <div className="details-page">
        <div
          className="details-page-header"
          style={{
            backgroundImage: 'url("' + this.state.post.img + '")',
          }}
        >
          <h1 className="details-page-title">{this.state.post.title}</h1>
          <p className="details-page-sub">{this.state.post.sub_title}</p>
          <p className="details-page-info">
            #{this.state.post.category} @{this.state.post.author} $
            {this.state.post.location}
          </p>
        </div>
        {/* <span>{this.state.post.date.month} {this.state.post.date.month}</span> */}
        <div className="details-page-content">
          <div className="details-page-showcase">
            {this.state.post.showcase ? (
              this.state.post.showcase.map((item, index) => (
                <img
                  className="showcase-images"
                  key={index}
                  src={item}
                  alt="showcase"
                />
              ))
            ) : (
              <div></div>
            )}
          </div>
          <p className="details-page-description">
            {nl2br(this.state.post.description)}
          </p>
        </div>
      </div>
    );
  }
}

export default Details;
