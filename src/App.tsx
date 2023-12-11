import React from "react";
import { Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { SignIn } from "./Views/SignIn";
import { Container } from "./Components/Container";
import Search from "./Views/Search/Search";
import SignUp from "./Views/SignUp/SignUp";
const App: React.FC = () => {
  return (
    <Container $height="100%">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/search" element={<Search />}></Route>
      </Routes>
      
    </Container>
  );
};

export default App;
