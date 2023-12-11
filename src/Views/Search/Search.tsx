import { SearchForm } from "../../Components/Search";
import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import { BaseLayout } from "../../Components/BaseLayout";
import ListOfCards from "../../ListOfCards";
import { Space } from "antd";
import { Container } from "../../Components/Container";
import { Header } from "../../Components/Header";

function Search() {
  return (
    <Container $background="rgb(1, 23, 45)" $width="100%" $height="100%">
      <BaseLayout>
        <Header />
       
        <Container $background="rgb(1, 23, 45)"$width="100%" $height="100%">
          <SearchForm />
        </Container>
        <Container $background="rgb(0, 33, 64)">
          <h2
            style={{
              color: "white",
              margin: "auto",
              marginTop: "75px",
              fontSize: "24px",
              background: "rgb(0, 33, 64)",
              marginLeft: '20px'
            }}
          >
            Your search history
          </h2>
        </Container>
        <Container $background="rgb(1, 23, 45)" $width="100%" $height="100%">
        <ListOfCards />
        </Container>
        <Container $background="rgb(1, 23, 45)" $width="100%" $height="100%">
        <ListOfCards />
        </Container>
      </BaseLayout>
    </Container>
  );
}

export default Search;
