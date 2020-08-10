import React from "react";
import styled from "styled-components";

// import "./styles.css";
import AppCard from './Components/AppCard';

// create a masonry grid with cards 

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


class AppList extends React.Component {
    render() {
      return (
        <Container>
          <AppCard
            title="Toledo, Spain"
            subtitle="Also know as The Imperial City."
            tag="Spain"
            centerIconName="fas fa-play-circle"
            bottomIconName="fas fa-ellipsis-h"
            bgPhoto="https://picsum.photos/740/420/?random"
            cardSize="4"
          />
        </Container>
      );
  }
}

export default AppList;
