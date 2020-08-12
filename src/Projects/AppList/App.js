import React from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
// import "./styles.css";
import AppCard from './Components/AppCard';

// this creates a masonry grid with cards 
const Container = styled.div`
  padding: 50px;
  padding-bottom: 100px;
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-gap: 30px;
  grid-auto-rows: 400px;
  grid-template-rows: 260px 400px 400px;
  & > div {
    grid-column: span 2;
    &:nth-child(5),
    &:nth-child(6) {
      grid-column: span 1;
    }
    &:nth-child(8) {
      grid-column: span 4;
    }
    &:nth-child(14) {
      grid-column: span 4;
    }
  }
  @media screen and (max-width: 700px) {
    grid-template-columns: 1fr;
    grid-gap: 50px;
    padding: 10px;
    & > div {
      grid-column: span 1 !important;
    }
  }
`;

// local db link 
const BACKEND_API = "http://localhost:5000/native/api/shoutout/";

class AppList extends React.Component {
  state = {
    shoutout_post: [],
    laoding: true, 
    error: false,
    errorMessage: "",
  }

  componentDidMount() {
    axios
      .get(BACKEND_API + "data")
      .then((res) => {
        this.setState({
          shoutout_post: res.data,
          loading: false
        });
      })
      .catch((error) => {
        // Error
        console.log(error);
        this.setState({
          errorMessage: error.message,
          error: true,
          loading: false
        });
      });
  } 
    render() {
      return (
        <div>
          <div className="header">
            <h1 className="header-title">SHOUT-OUT</h1>
            <p className="header-subtitle">Advertisement </p>
          </div>
          <Container>
            {this.state.loading && !this.state.error ? (
              <span>loading... </span>
            ) : this.state.error ? (
              <span>Couldn't get data: {this.state.errorMessage}</span>
            ) : (
              this.state.shoutout_post.map((post, index) => (
                <AppCard
                  key={index}
                  title={post.title}
                  subtitle={post.sub_title}
                  tag={post.category}
                  centerIconName="fas fa-play-circle"
                  bottomIconName="fas fa-ellipsis-h"
                  bgPhoto={post.img}
                  cardSize={post.size}
                />
              ))
            )}
          </Container>
        </div>
      );
  }
}

export default AppList;
