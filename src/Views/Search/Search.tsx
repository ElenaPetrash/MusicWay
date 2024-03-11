import { SearchForm } from "../../Components/Search";
import React from "react";
import { Sidebar } from "../../Components/Sidebar";
import { BaseLayout } from "../../Components/BaseLayout";
import ListOfCards from "../../ListOfCards";
import { Space } from "antd";
import { Container } from "../../Components/Container";
import { Header } from "../../Components/Header";
import { useState } from "react";
import listMusic from "../../Components/Search/listMusic.json";

function Search() {
  const [searchResults, setSearchResults] = useState(listMusic);
  const [search, setSearch] = useState("");

  const filterMusic = (newSearch: string) => {
    setSearch(newSearch);
    // filter music with newSearch

    const filteredMusicList = listMusic.filter((e) =>
      e.name.includes(newSearch)
    );
    setSearchResults(filteredMusicList);
    console.log(newSearch);
  };

  return (
    <Container $background="rgb(1, 23, 45)" $width="100%" $height="100%">
      <BaseLayout>
        <Header />

        <Container $background="rgb(1, 23, 45)" $width="100%" $height="100%">
          <SearchForm value={search} onSearch={filterMusic} />
        </Container>
        <Container $background="rgb(0, 33, 64)">
          <h2
            style={{
              color: "white",
              margin: "auto",
              marginTop: "75px",
              fontSize: "24px",
              background: "rgb(0, 33, 64)",
              marginLeft: "20px",
            }}
          >
            Your search history
          </h2>
        </Container>
        <Container $background="rgb(1, 23, 45)" $width="100%" $height="100%">
          <ListOfCards cards={searchResults} />
        </Container>
        <Container $background="rgb(1, 23, 45)" $width="100%" $height="100%">
          {/* <ListOfCards cards={listMusic}/> */}
        </Container>
      </BaseLayout>
    </Container>
  );
}

export default Search;
