import React from "react";
import Navbar from "./components/Navbar";
import SubMenu from "./components/SubMenu";
import Details from "./pages/Details";

const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <SubMenu />
        <Details />
      </div>
    </div>
  );
};

export default App;
