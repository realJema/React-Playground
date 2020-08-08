import React from "react";
import Card from "react-bootstrap/Card";

class PostCard extends React.Component {
    render() {
        return (
          <Card
            id={this.props.data._id.$oid}
            className="col-sm-6 col-md-4 col-lg-3 place_card text-white"
          >
            <Card.Img
              src={require("../images/" + this.props.data.img)}
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>{this.props.data.title}</Card.Title>
              <Card.Text>{this.props.data.description}</Card.Text>
              <Card.Subtitle>Last updated 3 mins ago</Card.Subtitle>
            </Card.ImgOverlay>
          </Card>
        );
    }
}
export default PostCard;
