import React from "react";
import DimensionsContainer from "./components/DimensionsContainer";
import Nav from "./components/Nav";
import { GlobalStyle } from "./components/Styles";

const App = () => (
  <>
    <GlobalStyle />
    <Nav />
    <div className="App">
      <header className="App-header">
        <DimensionsContainer />
      </header>
    </div>
  </>
);

export default App;
