import React from "react";
import { AppWrapper, GlobalStyles } from "./App.styles";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Options from "./components/Options";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Copyright from "./components/Copyright";

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <AppWrapper>
        <Nav />
        <Header />
        <Options />
        <Cards />
        <Footer />
      </AppWrapper>
      <Copyright />
    </>
  );
};

export default App;
